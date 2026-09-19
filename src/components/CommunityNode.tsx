import {
  Blocks,
  BookOpen,
  CloudSun,
  Flame,
  GitBranch,
  GraduationCap,
  Radio,
  Sprout,
  Speaker,
  Wrench,
} from "lucide-react";

const offerings = [
  { icon: CloudSun, label: "Agrivoltaic roof" },
  { icon: Flame, label: "Heated growing rooms" },
  { icon: BookOpen, label: "Small library" },
  { icon: Speaker, label: "Sound system" },
  { icon: Radio, label: "Radio station" },
  { icon: Wrench, label: "Workshops" },
  { icon: GraduationCap, label: "School programs" },
  { icon: Blocks, label: "Whatever people build next" },
];

export const CommunityNode = () => {
  return (
    <section className="mt-10 scroll-mt-24 rounded-2xl border border-primary-foreground/10 bg-secondary/50 p-6 md:p-10 text-left shadow-sm">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
        <Sprout className="h-3.5 w-3.5 text-accent" />
        Community node
      </span>

      <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80 leading-relaxed">
        An agrivoltaic roof, heated growing rooms, a small library, sound system, radio
        station, and space for workshops, school programs, and whatever people decide to
        build next.
      </p>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {offerings.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary px-4 py-3"
          >
            <item.icon className="h-5 w-5 shrink-0 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4">
        <GitBranch className="h-5 w-5 shrink-0 text-accent" />
        <p className="text-sm text-primary-foreground/80 leading-relaxed">
          <span className="font-semibold text-primary-foreground">
            Open-source by design
          </span>{" "}
          — a blueprint others can copy, improve, and deploy.
        </p>
      </div>
    </section>
  );
};
