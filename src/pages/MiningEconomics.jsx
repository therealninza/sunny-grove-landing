import React, { useEffect, useMemo, useState } from "react";

// kbit · mining-heat economics
// Decomposes one megawatt-hour of electricity into mining revenue + recovered
// heat, against delivered power cost. Built for an off-grid greenhouse fleet.

const C = {
  ink: "#0E141A",
  ink2: "#161E26",
  ink3: "#1C2731",
  line: "#2A3742",
  fog: "#E7ECEA",
  mist: "#8C9DA4",
  faint: "#5E6F77",
  gold: "#E6B84C", // mining revenue
  ember: "#E06C3A", // recovered heat
  cyan: "#4FB6C9", // power in
  moss: "#7FB069", // net positive
  rust: "#D85A4A", // net negative
};

const PRESETS = [
  { name: "S21 Hydro", eff: 16, w: 5360 },
  { name: "S21 Pro", eff: 15, w: 4290 },
  { name: "S21", eff: 17.5, w: 3500 },
  { name: "S19 XP", eff: 21.5, w: 2932 },
  { name: "S19j Pro", eff: 29.5, w: 3050 },
];

const HASHPRICE_LIVE = 0.028; // $/TH/day, pulled 10 Jun 2026 (Bitbo / Luxor-derived)

const usd = (n, dp = 0) =>
  (n < 0 ? "-$" : "$") +
  Math.abs(n).toLocaleString("en-US", {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  });

function num(v, fallback) {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : fallback;
}

export default function MiningEconomics() {
  const [hashprice, setHashprice] = useState(HASHPRICE_LIVE);
  const [eff, setEff] = useState(16);
  const [powerCost, setPowerCost] = useState(40); // $/MWh delivered
  const [heatOn, setHeatOn] = useState(true);
  const [recovery, setRecovery] = useState(90); // % of electricity captured as useful heat
  const [heatValue, setHeatValue] = useState(120); // $/MWh thermal displaced (vs propane/electric)
  const [fleetKw, setFleetKw] = useState(70); // ~13x S21 Hydro

  useEffect(() => {
    const id = "kbit-fonts";
    if (!document.getElementById(id)) {
      const l = document.createElement("link");
      l.id = id;
      l.rel = "stylesheet";
      l.href =
        "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
      document.head.appendChild(l);
    }
    const s = document.createElement("style");
    s.textContent = `
      .kbit-range{ -webkit-appearance:none; appearance:none; width:100%; height:3px;
        background:${C.line}; border-radius:99px; outline:none; }
      .kbit-range::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none;
        width:18px; height:18px; border-radius:50%; background:${C.fog};
        border:2px solid ${C.ink}; box-shadow:0 0 0 1px ${C.line}; cursor:pointer;
        transition:transform .12s ease; }
      .kbit-range::-webkit-slider-thumb:hover{ transform:scale(1.12); }
      .kbit-range::-moz-range-thumb{ width:18px; height:18px; border-radius:50%;
        background:${C.fog}; border:2px solid ${C.ink}; cursor:pointer; }
      .kbit-num{ background:${C.ink3}; border:1px solid ${C.line}; color:${C.fog};
        font-family:'JetBrains Mono',monospace; font-size:14px; border-radius:8px;
        padding:7px 9px; width:100%; outline:none; }
      .kbit-num:focus{ border-color:${C.faint}; }
      .kbit-bar{ transition:left .35s cubic-bezier(.2,.7,.2,1), width .35s cubic-bezier(.2,.7,.2,1); }
      .kbit-hero{ transition:color .3s ease; }
      @media (prefers-reduced-motion: reduce){
        .kbit-bar,.kbit-range::-webkit-slider-thumb{ transition:none !important; }
      }
    `;
    document.head.appendChild(s);
    return () => s.remove();
  }, []);

  const m = useMemo(() => {
    const e = Math.max(eff, 0.1);
    const rev = (hashprice * 1e6) / (e * 24); // $/MWh
    const heat = heatOn ? (recovery / 100) * heatValue : 0; // $/MWh credit
    const net = rev + heat - powerCost;
    const breakevenPower = rev + heat; // most you can pay for power at breakeven
    const breakevenHash = ((powerCost - heat) * e * 24) / 1e6; // hashprice to cover net power
    const yr = fleetKw * 8.76; // MWh/yr at 100% uptime
    return {
      rev,
      heat,
      net,
      breakevenPower,
      breakevenHash,
      yrMwh: yr,
      grossYr: rev * yr,
      netYr: net * yr,
      netDay: (net * yr) / 365,
    };
  }, [hashprice, eff, powerCost, heatOn, recovery, heatValue, fleetKw]);

  // Waterfall running totals: 0 -> -power -> +rev -> +heat (= net)
  const steps = [
    { label: "Power in", v: -powerCost, color: C.cyan, sign: "−" },
    { label: "Mining revenue", v: m.rev, color: C.gold, sign: "+" },
    { label: "Heat recovered", v: m.heat, color: C.ember, sign: "+" },
  ];
  const pts = [0];
  steps.forEach((s) => pts.push(pts[pts.length - 1] + s.v));
  const dMin = Math.min(...pts, 0);
  const dMax = Math.max(...pts, 0);
  const span = dMax - dMin || 1;
  const xPct = (val) => ((val - dMin) / span) * 100;
  const zeroPct = xPct(0);

  const netColor = m.net >= 0 ? C.moss : C.rust;
  const unitEq = (fleetKw * 1000) / 5360; // S21 Hydro equivalents

  return (
    <div
      style={{
        background: C.ink,
        color: C.fog,
        minHeight: "100vh",
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
        padding: "22px 16px 40px",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 22,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: 3,
                color: C.faint,
                textTransform: "uppercase",
              }}
            >
              kbit · mining-heat economics
            </div>
            <h1
              style={{
                margin: "6px 0 0",
                fontSize: 27,
                fontWeight: 600,
                lineHeight: 1.1,
                maxWidth: 420,
              }}
            >
              What one megawatt-hour becomes
            </h1>
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: C.mist,
              border: `1px solid ${C.line}`,
              borderRadius: 8,
              padding: "8px 11px",
              textAlign: "right",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: C.gold }}>● live hashprice</span>
            <br />
            {usd(HASHPRICE_LIVE, 3)}/TH/day · 10 Jun 2026
          </div>
        </div>

        {/* Hero */}
        <div
          style={{
            background: C.ink2,
            border: `1px solid ${C.line}`,
            borderRadius: 16,
            padding: "20px 20px 22px",
            marginBottom: 14,
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: 2,
              color: C.mist,
              textTransform: "uppercase",
            }}
          >
            Net margin per MWh
          </div>
          <div
            className="kbit-hero"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1,
              margin: "4px 0 2px",
              color: netColor,
            }}
          >
            {usd(m.net, 0)}
          </div>
          <div style={{ fontSize: 13, color: C.mist, marginBottom: 18 }}>
            {m.net >= 0
              ? "Every MWh you push through the miners nets positive after power."
              : "Power cost exceeds what hashing + heat return on each MWh."}
          </div>

          {/* Waterfall */}
          <div
            style={{
              position: "relative",
              height: 64,
              borderRadius: 8,
              background: C.ink3,
              overflow: "hidden",
            }}
          >
            {/* zero line */}
            <div
              style={{
                position: "absolute",
                left: `${zeroPct}%`,
                top: 0,
                bottom: 0,
                width: 1,
                background: C.faint,
                opacity: 0.7,
              }}
            />
            {steps.map((s, i) => {
              const a = pts[i];
              const b = pts[i + 1];
              const lo = Math.min(a, b);
              const hi = Math.max(a, b);
              const left = xPct(lo);
              const w = xPct(hi) - left;
              if (Math.abs(s.v) < 1e-9) return null;
              return (
                <div
                  key={i}
                  className="kbit-bar"
                  title={`${s.label}: ${s.sign}${usd(Math.abs(s.v), 0)}`}
                  style={{
                    position: "absolute",
                    left: `${left}%`,
                    width: `${w}%`,
                    top: 14,
                    height: 36,
                    background: s.color,
                    opacity: 0.92,
                    borderRadius: 3,
                  }}
                />
              );
            })}
            {/* net marker */}
            <div
              className="kbit-bar"
              style={{
                position: "absolute",
                left: `${xPct(m.net)}%`,
                top: 6,
                bottom: 6,
                width: 2,
                background: netColor,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 18px",
              marginTop: 12,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11.5,
              color: C.mist,
            }}
          >
            <Legend c={C.cyan} t={`Power  −${usd(powerCost, 0)}`} />
            <Legend c={C.gold} t={`Mining  +${usd(m.rev, 0)}`} />
            {heatOn && <Legend c={C.ember} t={`Heat  +${usd(m.heat, 0)}`} />}
            <Legend c={netColor} t={`Net  ${usd(m.net, 0)}`} />
          </div>
        </div>

        {/* Stat row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 10,
            marginBottom: 14,
          }}
        >
          <Stat label="Gross mining" value={`${usd(m.rev, 0)}/MWh`} accent={C.gold} />
          <Stat
            label="Heat credit"
            value={heatOn ? `${usd(m.heat, 0)}/MWh` : "off"}
            accent={C.ember}
          />
          <Stat
            label="Break-even power"
            value={`${usd(m.breakevenPower, 0)}/MWh`}
            accent={C.cyan}
            sub={`${(m.breakevenPower / 10).toFixed(1)}¢/kWh ceiling`}
          />
        </div>

        {/* Controls */}
        <div
          style={{
            background: C.ink2,
            border: `1px solid ${C.line}`,
            borderRadius: 16,
            padding: 20,
            marginBottom: 14,
          }}
        >
          <Field
            label="Hashprice"
            unit="$/TH/day"
            value={hashprice}
            onNum={(v) => setHashprice(num(v, hashprice))}
            min={0.005}
            max={0.12}
            step={0.001}
            dp={3}
            onRange={setHashprice}
            extra={
              <button
                onClick={() => setHashprice(HASHPRICE_LIVE)}
                style={resetBtn}
              >
                reset to live
              </button>
            }
          />

          <div style={{ margin: "18px 0 8px" }}>
            <RowLabel label="Miner efficiency" unit="J/TH" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "8px 0 10px" }}>
              {PRESETS.map((p) => {
                const on = Math.abs(eff - p.eff) < 0.01;
                return (
                  <button
                    key={p.name}
                    onClick={() => setEff(p.eff)}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11.5,
                      padding: "6px 10px",
                      borderRadius: 7,
                      cursor: "pointer",
                      border: `1px solid ${on ? C.gold : C.line}`,
                      background: on ? "rgba(230,184,76,0.12)" : "transparent",
                      color: on ? C.gold : C.mist,
                    }}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>
            <SliderRow
              value={eff}
              onNum={(v) => setEff(num(v, eff))}
              min={8}
              max={40}
              step={0.5}
              dp={1}
              onRange={setEff}
            />
          </div>

          <Field
            label="Delivered power cost"
            unit="$/MWh"
            value={powerCost}
            onNum={(v) => setPowerCost(num(v, powerCost))}
            min={0}
            max={140}
            step={1}
            dp={0}
            onRange={setPowerCost}
            extra={
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: C.faint }}>
                {(powerCost / 10).toFixed(1)}¢/kWh
              </span>
            }
          />

          {/* Heat recovery */}
          <div
            style={{
              marginTop: 18,
              paddingTop: 16,
              borderTop: `1px solid ${C.line}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <RowLabel label="Heat recovery" unit="greenhouse loop" dot={C.ember} />
              <button
                onClick={() => setHeatOn(!heatOn)}
                style={{
                  width: 46,
                  height: 26,
                  borderRadius: 99,
                  border: `1px solid ${C.line}`,
                  background: heatOn ? "rgba(224,108,58,0.25)" : C.ink3,
                  position: "relative",
                  cursor: "pointer",
                  transition: "background .2s",
                }}
                aria-pressed={heatOn}
              >
                <span
                  style={{
                    position: "absolute",
                    top: 2,
                    left: heatOn ? 22 : 2,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: heatOn ? C.ember : C.faint,
                    transition: "left .2s",
                  }}
                />
              </button>
            </div>
            {heatOn && (
              <div style={{ marginTop: 12, display: "grid", gap: 14 }}>
                <SliderRow
                  caption="Captured & used"
                  value={recovery}
                  onNum={(v) => setRecovery(Math.min(100, Math.max(0, num(v, recovery))))}
                  min={0}
                  max={100}
                  step={1}
                  dp={0}
                  suffix="%"
                  onRange={setRecovery}
                />
                <SliderRow
                  caption="Displaced heat value"
                  value={heatValue}
                  onNum={(v) => setHeatValue(num(v, heatValue))}
                  min={0}
                  max={250}
                  step={5}
                  dp={0}
                  prefix="$"
                  suffix="/MWhₜ"
                  onRange={setHeatValue}
                />
              </div>
            )}
          </div>

          {/* Fleet */}
          <div style={{ marginTop: 18, paddingTop: 16, borderTop: `1px solid ${C.line}` }}>
            <Field
              label="Fleet power draw"
              unit="kW"
              value={fleetKw}
              onNum={(v) => setFleetKw(num(v, fleetKw))}
              min={5}
              max={500}
              step={5}
              dp={0}
              onRange={setFleetKw}
              extra={
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: C.faint }}>
                  ≈ {unitEq.toFixed(1)}× S21 Hydro
                </span>
              }
            />
          </div>
        </div>

        {/* Fleet results */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 10,
            marginBottom: 14,
          }}
        >
          <Stat label="Energy / yr" value={`${m.yrMwh.toFixed(0)} MWh`} sub="100% uptime" />
          <Stat label="Gross mining / yr" value={usd(m.grossYr, 0)} accent={C.gold} />
          <Stat
            label="Net / yr"
            value={usd(m.netYr, 0)}
            accent={m.net >= 0 ? C.moss : C.rust}
            sub={`${usd(m.netDay, 0)}/day`}
          />
        </div>

        {/* Break-even hashprice */}
        <div
          style={{
            background: C.ink2,
            border: `1px solid ${C.line}`,
            borderRadius: 12,
            padding: "14px 18px",
            fontSize: 13,
            color: C.mist,
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: C.fog, fontWeight: 600 }}>Break-even hashprice </span>
          {m.breakevenHash <= 0 ? (
            <>
              — recovered heat alone (<span style={{ color: C.ember }}>{usd(m.heat, 0)}/MWh</span>)
              already covers your power. Mining revenue is pure upside.
            </>
          ) : (
            <>
              you need at least{" "}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: C.gold,
                }}
              >
                {usd(m.breakevenHash, 3)}/TH/day
              </span>{" "}
              to cover power net of heat at {eff} J/TH. Live is {usd(HASHPRICE_LIVE, 3)}.
            </>
          )}
        </div>

        <div
          style={{
            marginTop: 18,
            fontSize: 11,
            color: C.faint,
            fontFamily: "'JetBrains Mono', monospace",
            lineHeight: 1.7,
          }}
        >
          rev/MWh = hashprice × 1e6 ÷ (J/TH × 24) · heat credit = capture% × displaced value ·
          net = mining + heat − power. Gross of pool fees, downtime, hardware depreciation.
          Live hashprice 10 Jun 2026; not financial advice.
        </div>
      </div>
    </div>
  );
}

function Legend({ c, t }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span style={{ width: 9, height: 9, borderRadius: 2, background: c }} />
      {t}
    </span>
  );
}

function Stat({ label, value, accent = C.fog, sub }) {
  return (
    <div
      style={{
        background: C.ink2,
        border: `1px solid ${C.line}`,
        borderRadius: 12,
        padding: "13px 14px",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10.5,
          letterSpacing: 1.5,
          color: C.mist,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 21,
          fontWeight: 700,
          color: accent,
          marginTop: 3,
        }}
      >
        {value}
      </div>
      {sub && <div style={{ fontSize: 11, color: C.faint, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function RowLabel({ label, unit, dot }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
      {dot && <span style={{ width: 8, height: 8, borderRadius: 2, background: dot }} />}
      <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: C.faint,
        }}
      >
        {unit}
      </span>
    </div>
  );
}

function SliderRow({ value, onNum, onRange, min, max, step, dp, caption, prefix, suffix }) {
  return (
    <div>
      {caption && (
        <div style={{ fontSize: 12, color: C.mist, marginBottom: 6 }}>{caption}</div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <input
          type="range"
          className="kbit-range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onRange(parseFloat(e.target.value))}
        />
        <div style={{ width: 92, flexShrink: 0, position: "relative" }}>
          <input
            type="number"
            className="kbit-num"
            value={value}
            step={step}
            onChange={(e) => onNum(e.target.value)}
          />
        </div>
      </div>
      {(prefix || suffix) && (
        <div
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 11,
            color: C.faint,
            marginTop: 4,
          }}
        >
          {prefix}
          {value}
          {suffix}
        </div>
      )}
    </div>
  );
}

function Field({ label, unit, value, onNum, onRange, min, max, step, dp, extra }) {
  return (
    <div style={{ marginTop: 4 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 8,
        }}
      >
        <RowLabel label={label} unit={unit} />
        {extra}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <input
          type="range"
          className="kbit-range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onRange(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="kbit-num"
          style={{ width: 92, flexShrink: 0 }}
          value={value}
          step={step}
          onChange={(e) => onNum(e.target.value)}
        />
      </div>
    </div>
  );
}

const resetBtn = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10.5,
  color: C.gold,
  background: "transparent",
  border: `1px solid ${C.line}`,
  borderRadius: 6,
  padding: "4px 8px",
  cursor: "pointer",
};
