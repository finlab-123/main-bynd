import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "Your privacy, our promise" },
  { icon: Sparkles, label: "We listen, then guide" },
  { icon: PhoneCall, label: "Real people, real help" },
];

const CtaSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(135deg, #1a9927 0%, #126991 100%)",
      }}
    >
      {}

      <div
        className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 rounded-3xl bg-white/8 px-6 py-10 backdrop-blur md:px-12"
        style={{
          opacity: isVisible ? 1 : 0,
          animation: isVisible
            ? "reveal-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards"
            : "none",
        }}
      >
        <div className="text-center max-w-3xl space-y-4">
          <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
            Your Loan Journey, Hand-in-Hand
          </h2>
          <p className="text-base text-white/75 md:text-lg">
            We know every financial story is unique. That’s why we listen first, understand your needs, and walk with you—step by step—toward the right loan for your life. No jargon. No pressure. Just honest, caring support from real people.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-white/80 md:text-base">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-white" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="grid w-full gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="grid gap-4 text-left text-white/80 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-900/20">
              <p className="text-sm font-semibold text-white">
                Let’s start with a conversation
              </p>
              <p className="mt-2 text-sm text-white/70">
                Tell us your goals and worries—our team will suggest your best next steps, with no obligation and no sales pitch.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-900/20">
              <p className="text-sm font-semibold text-white">
                Guidance you can trust
              </p>
              <p className="mt-2 text-sm text-white/70">
                We’re here to answer every question, explain every detail, and support you like a friend—always with honesty and respect.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-center md:text-right">
            <div className="flex flex-wrap justify-center gap-3 md:justify-end">
              <Button
                variant="gold"
                size="lg"
                className="shadow-lg shadow-blue-500/20"
              >
                Talk to a Loan Specialist
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                className="border-white/50 text-white hover:border-white/70"
              >
                Ask Us Anything
              </Button>
            </div>
            <p className="text-xs text-white/65">
              You’ll always get a reply from a real person—never a bot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

