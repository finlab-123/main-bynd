import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Search, Speech, PenTool, Rocket, Settings, Sparkles } from "lucide-react";

const steps = [
  { icon: Search, title: "Understand", desc: "Financial goals, risk appetite, and structure." },
  { icon: PenTool, title: "Design", desc: "Custom insurance-investment strategy." },
  { icon: Rocket, title: "Implement", desc: "Seamless onboarding and documentation." },
  { icon: Settings, title: "Manage", desc: "Ongoing review and servicing." },
];

const ApproachSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="our-approach"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, hsl(84,18%,95%), hsl(120,14%,90%))" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[8%] top-[10%] h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute left-[6%] bottom-[-10%] h-52 w-52 rounded-full bg-lime-200/35 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards" : "none",
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-900 shadow-sm">
            <Speech className="h-4 w-4" /> A calm, four-step plan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 text-balance">
            Advisory first, products second.
          </h2>
          <p className="text-muted-foreground mt-4 text-pretty text-base md:text-lg">
            We listen, sketch options with you, and only then choose tools. The steps are simple and you always know what comes next.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative text-center rounded-2xl border border-emerald-100/60 bg-white/70 px-5 py-6 shadow-md"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `reveal-up 0.6s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.1}s forwards` : "none",
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm" style={{ background: "linear-gradient(145deg, hsl(104,45%,34%), hsl(98,55%,38%))" }}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold tracking-wider" style={{ color: "hsl(var(--gold))" }}>STEP {i + 1}</span>
              <h3 className="font-serif text-lg text-foreground mt-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 text-pretty leading-relaxed">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px" style={{ backgroundColor: "hsla(104,45%,40%,0.25)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

