
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Sun, Cpu, Thermometer, Droplets, Shield, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BuildingSpec = () => {
  return (
    <div className="min-h-screen bg-[hsl(150,30%,8%)] text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <span className="text-xs text-white/40">Version 1.0 — February 2026</span>
        </div>
      </div>

      {/* Title */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-3">Design Specification</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Four Seasons Greenhouse</h1>
          <p className="text-white/60 text-lg">Community Food, Culture & Growing Hub</p>
          <p className="text-white/40 mt-2">50m × 50m · Northern Canada · Year-Round Operation</p>
        </div>

        {/* Overview Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><span className="text-white/40 block">Footprint</span><span className="font-semibold">2,500 m²</span></div>
            <div><span className="text-white/40 block">Structure</span><span className="font-semibold">Timber Post-and-Beam</span></div>
            <div><span className="text-white/40 block">Heating</span><span className="font-semibold">ASIC Waste Heat</span></div>
            <div><span className="text-white/40 block">Energy</span><span className="font-semibold">Agrivoltaic Solar</span></div>
          </div>
        </div>

        {/* Sections */}
        <Accordion type="multiple" className="space-y-3">
          {/* 1. Project Overview */}
          <AccordionItem value="overview" className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]">
            <AccordionTrigger className="text-white hover:no-underline">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-semibold">1. Project Overview</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 space-y-4">
              <p>This document is the complete design specification for a large-scale, four-season community greenhouse to be constructed in Northern Canada. The structure serves as a year-round food-growing environment, community gathering space, café, and Indigenous cultural programming venue.</p>
              <h4 className="text-white font-semibold mt-4">Design Vision</h4>
              <p>The greenhouse draws inspiration from Victorian glass conservatories, Indigenous longhouse traditions, and modern agrivoltaic farming. It is not merely a utilitarian growing structure — it is a living cultural institution that connects people to food, land, and community heritage.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
                <div className="bg-white/5 rounded-lg p-3"><span className="text-white/40">Project Name</span><br/>Four Seasons Community Greenhouse</div>
                <div className="bg-white/5 rounded-lg p-3"><span className="text-white/40">Location</span><br/>Northern Canada / Alaska climate zone</div>
                <div className="bg-white/5 rounded-lg p-3"><span className="text-white/40">Primary Use</span><br/>Mixed-use: growing, gathering, café, cultural</div>
                <div className="bg-white/5 rounded-lg p-3"><span className="text-white/40">Aesthetic</span><br/>Warm timber, glass, Indigenous cultural motifs</div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 2. Structural System */}
          <AccordionItem value="structure" className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]">
            <AccordionTrigger className="text-white hover:no-underline">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-semibold">2. Structural System</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 space-y-4">
              <p>The structure uses a heavy timber post-and-beam system with steel cross-bracing for lateral stability. The 50m × 50m footprint consists of roughly three parallel bays (~17.1m wide each).</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm mt-4">
                  <tbody className="divide-y divide-white/10">
                    <tr><td className="py-2 text-white/40 pr-4 whitespace-nowrap">Overall Footprint</td><td className="py-2">50,000mm × 50,000mm</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4 whitespace-nowrap">Bay Width</td><td className="py-2">~17.1m (3 bays)</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4 whitespace-nowrap">Ridge Height</td><td className="py-2">~9.6m at peak</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4 whitespace-nowrap">Primary Columns</td><td className="py-2">Glulam timber posts, min 300×300mm</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4 whitespace-nowrap">Lateral Bracing</td><td className="py-2">Steel diagonal cross-bracing (CHS or rod)</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4 whitespace-nowrap">Column Spacing</td><td className="py-2">~5m on centre</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4 whitespace-nowrap">Foundation</td><td className="py-2">Concrete pad footings, insulated perimeter</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4 whitespace-nowrap">Roof Pitch</td><td className="py-2">25–30° (snow load critical)</td></tr>
                  </tbody>
                </table>
              </div>
              <h4 className="text-white font-semibold mt-4">Contractor Notes</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>All timber: Douglas Fir or SPF glulam, min GL24h grade (CAN/CSA O86)</li>
                <li>Steel hardware: hot-dip galvanized (class C5-M corrosion)</li>
                <li>Snow load design min: 2.0 kPa ground snow load (NBCC 2020)</li>
                <li>Wind uplift: design for 140 km/h wind exposure (open terrain)</li>
                <li>Thermal break pads at all steel-to-timber connections</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 3. Building Envelope & Glazing */}
          <AccordionItem value="envelope" className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]">
            <AccordionTrigger className="text-white hover:no-underline">
              <div className="flex items-center gap-3">
                <Thermometer className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-semibold">3. Building Envelope & Glazing</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 space-y-4">
              <p>The envelope must balance maximum light transmission with exceptional thermal performance, adapted for a subarctic climate with modern high-performance glazing units.</p>
              <h4 className="text-white font-semibold">Roof Glazing</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Triple-pane insulated glass units (IGU), low-E coating</li>
                <li>U-Value: ≤ 1.0 W/m²K (target 0.8)</li>
                <li>SHGC: 0.45–0.60 | VT: ≥ 70%</li>
                <li>~30% of roof area allocated to solar panels</li>
              </ul>
              <h4 className="text-white font-semibold mt-4">Wall Glazing</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Lower walls (0–1.2m): Insulated timber-clad panel, R-20+</li>
                <li>Mid walls (1.2–3.0m): Double-pane IGU, U ≤ 1.6 W/m²K</li>
                <li>North wall: Reduced glazing, insulated opaque cladding</li>
                <li>Double-door airlock entry vestibule (min 2m deep)</li>
              </ul>
              <div className="bg-white/5 rounded-lg p-4 mt-4 text-sm">
                <p className="text-white font-semibold mb-2">Thermal Performance</p>
                <div className="grid grid-cols-2 gap-2">
                  <div><span className="text-white/40">Winter Design</span><br/>-40°C ext / +15°C int min</div>
                  <div><span className="text-white/40">Summer Peak</span><br/>+32°C ext / max +28°C int</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 4. Agrivoltaic Solar Canopy */}
          <AccordionItem value="solar" className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]">
            <AccordionTrigger className="text-white hover:no-underline">
              <div className="flex items-center gap-3">
                <Sun className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-semibold">4. Agrivoltaic Solar Canopy</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 space-y-4">
              <p>The roof integrates bifacial semi-transparent solar panels allowing filtered light to reach plants below. Solar electricity powers the ASIC miners, whose waste heat heats the greenhouse — completing the energy loop.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm mt-2">
                  <tbody className="divide-y divide-white/10">
                    <tr><td className="py-2 text-white/40 pr-4">Panel Type</td><td className="py-2">Bifacial semi-transparent crystalline silicon PV, 60–70% opacity</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Coverage</td><td className="py-2">~750 m² (~30% of roof)</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Panel Count</td><td className="py-2">~440 panels</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Peak Power</td><td className="py-2">~220–264 kWp</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Battery</td><td className="py-2">100–200 kWh LiFePO4</td></tr>
                  </tbody>
                </table>
              </div>
              <h4 className="text-white font-semibold mt-4">Layout Strategy</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>South-facing slopes: 60% solar with alternating transparent strips</li>
                <li>North-facing slopes: Max 15% solar — prioritise light</li>
                <li>Ridge zone: Clear for ventilation and structural access</li>
                <li>Wiring through timber beam channels — no exposed conduit</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 5. ASIC Heating System */}
          <AccordionItem value="heating" className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]">
            <AccordionTrigger className="text-white hover:no-underline">
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-semibold">5. ASIC Bitcoin Mining Heat Recovery</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 space-y-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-sm mb-4">
                <p className="text-emerald-300 font-semibold mb-1">Energy Loop</p>
                <p>Solar roof → Powers ASIC miners → Miners generate heat → Heat warms greenhouse → Greenhouse grows food year-round. Miners also generate Bitcoin revenue.</p>
              </div>

              <h4 className="text-white font-semibold">Miner Sizing</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-white/10">
                    <tr><td className="py-2 text-white/40 pr-4">Target Heat</td><td className="py-2">~375–500 kW continuous</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Units Required</td><td className="py-2">~100–130 units at 3.5 kW each</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Hash Rate</td><td className="py-2">~3,000–4,000 TH/s total</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Cooling</td><td className="py-2">Immersion liquid cooling (preferred)</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Heat Recovery</td><td className="py-2">≥ 95% of electrical input</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-white font-semibold mt-4">Immersion Cooling</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Dielectric fluid (e.g. BitCool BC-888)</li>
                <li>3 tanks, ~40–50 units each (~3m × 0.8m × 1.0m)</li>
                <li>Fluid inlet: ~25–35°C, outlet: ~45–55°C</li>
                <li>Near-silent operation in growing areas</li>
              </ul>

              <h4 className="text-white font-semibold mt-4">Hydronic Distribution</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>PEX-A, 16mm/20mm, oxygen barrier</li>
                <li>80–100 circuits, max 100m per loop</li>
                <li>150mm reinforced concrete slab, PEX at 50mm depth</li>
                <li>R-20 rigid EPS insulation below slab</li>
                <li>Propylene glycol/water mix, 40% (food-safe, to -50°C)</li>
              </ul>

              <h4 className="text-white font-semibold mt-4">Backup Heating</h4>
              <p className="text-sm">Electric resistance immersion heater or propane condensing boiler. Min 150 kW capacity. Auto-switchover when supply temp drops below 38°C.</p>

              <h4 className="text-white font-semibold mt-4">Mining Operations Room</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Min 60 m², central or north side, insulated</li>
                <li>Locked, access-controlled, no public access</li>
                <li>Dedicated 400A+ panel, sub-metered</li>
                <li>FM-200 fire suppression</li>
                <li>24/7 remote monitoring dashboard</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 6. Interior Zone Layout */}
          <AccordionItem value="zones" className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]">
            <AccordionTrigger className="text-white hover:no-underline">
              <div className="flex items-center gap-3">
                <Droplets className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-semibold">6. Interior Zone Layout</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 space-y-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Zone A — Food Growing (1,200 m² / 48%)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Modular timber raised beds, 1.2m wide × 0.4m deep</li>
                  <li>Drip irrigation, full-spectrum LED grow lights</li>
                  <li>Target +18°C, 50–80% RH</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Zone B — Community Gathering (500 m² / 20%)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>100–120 seated, ~200 standing capacity</li>
                  <li>Polished concrete or stone tile over heated slab</li>
                  <li>AV equipment, timber ceiling baffles</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Zone C — Café & Food Service (300 m² / 12%)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>40 m² commercial kitchen, Health Canada compliant</li>
                  <li>Walk-in cooler (3m × 3m min)</li>
                  <li>Commercial hood exhaust isolated from growing zone</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Zone D — Cultural Programming (400 m² / 20%)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Workshop, exhibition, artist-in-residence space</li>
                  <li>Gallery-standard display systems, adjustable lighting</li>
                  <li>Space for standing totem pole (min 4m clear height)</li>
                  <li>Hardwood timber flooring, acoustic treatment</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 7. Cultural Design */}
          <AccordionItem value="cultural" className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]">
            <AccordionTrigger className="text-white hover:no-underline">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-semibold">7. Cultural Design Integration</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 space-y-4">
              <p>Indigenous cultural identity is woven throughout the structural and decorative elements. The design team should work with Indigenous artists and cultural advisors.</p>
              <h4 className="text-white font-semibold">Structural Ornamentation</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Entry posts carved with Nation-specific formline art</li>
                <li>Custom fabricated steel plates with laser-cut formline designs</li>
                <li>Feature wall with carved relief panel or mural</li>
                <li>Ceiling baffles with painted/carved geometric patterns</li>
              </ul>
              <h4 className="text-white font-semibold mt-4">Materials & Finishes</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-white/10">
                    <tr><td className="py-2 text-white/40 pr-4">Timber</td><td className="py-2">Natural linseed oil, warm amber tone</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Metal</td><td className="py-2">Matte black powder coat</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Accent Colour</td><td className="py-2">Deep forest green (#2D6A4F)</td></tr>
                    <tr><td className="py-2 text-white/40 pr-4">Signage</td><td className="py-2">Hand-crafted timber, English + Indigenous language</td></tr>
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 8. MEP */}
          <AccordionItem value="mep" className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]">
            <AccordionTrigger className="text-white hover:no-underline">
              <div className="flex items-center gap-3">
                <Droplets className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-semibold">8. MEP Systems</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 space-y-4">
              <h4 className="text-white font-semibold">Electrical</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>400A, 120/240V or 3-phase 208V service</li>
                <li>100–200 kWh LiFePO4 battery bank, 48V DC bus</li>
                <li>Dedicated 60A grow lighting circuits with smart dimmers</li>
                <li>2× Level 2 EVSE outlets</li>
              </ul>
              <h4 className="text-white font-semibold mt-4">Plumbing & Water</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Zoned drip irrigation, timer-controlled</li>
                <li>Rainwater harvesting: 10,000–15,000L cistern</li>
                <li>All supply lines insulated to R-10 minimum</li>
              </ul>
              <h4 className="text-white font-semibold mt-4">Ventilation & Climate</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Automated ridge vents + sidewall louvres</li>
                <li>HRV min 80% efficiency for winter air exchange</li>
                <li>Optional CO₂ enrichment (400→800 ppm)</li>
                <li>Independent thermostat per zone, central BMS</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 9. Contractor Checklist */}
          <AccordionItem value="checklist" className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]">
            <AccordionTrigger className="text-white hover:no-underline">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-emerald-400" />
                <span className="text-lg font-semibold">9. Contractor Handoff Checklist</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/70 space-y-4">
              <h4 className="text-white font-semibold">Pre-Construction</h4>
              <ul className="space-y-1 text-sm">
                <li>✅ Site survey complete — 50m × 50m confirmed</li>
                <li>☐ Geotechnical investigation</li>
                <li>☐ Structural engineer engaged — stamped drawings</li>
                <li>☐ Building permit submitted</li>
                <li>☐ Cultural advisor engaged</li>
                <li>☐ ASIC miner model & immersion tank supplier selected</li>
                <li>☐ 3D model converted to IFC/DWG</li>
                <li>✅ Heating system confirmed: ASIC waste heat → hydronic radiant</li>
              </ul>
              <h4 className="text-white font-semibold mt-4">Structure & Envelope</h4>
              <ul className="space-y-1 text-sm">
                <li>✅ Timber frame system confirmed</li>
                <li>☐ Glulam supplier selected (12–16 week lead time)</li>
                <li>☐ Glazing supplier selected — triple-pane IGU</li>
                <li>☐ Entry vestibule airlock designed</li>
                <li>✅ Roof pitch confirmed (~25–30°)</li>
              </ul>
              <h4 className="text-white font-semibold mt-4">Interior & Finishes</h4>
              <ul className="space-y-1 text-sm">
                <li>✅ Zone layout defined</li>
                <li>☐ Raised bed dimensions & layout drawing</li>
                <li>☐ Cultural art elements scoped with advisor</li>
                <li>☐ Furniture & equipment schedule</li>
                <li>☐ Signage design (English + Indigenous language)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Download link */}
        <div className="mt-12 text-center pb-12">
          <p className="text-white/40 text-sm">This specification should be read in conjunction with the provided 3D model files, site survey, and stamped engineering drawings.</p>
          <Link to="/">
            <Button variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuildingSpec;
