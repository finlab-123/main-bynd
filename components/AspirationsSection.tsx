import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Sparkles } from "lucide-react";

const AspirationsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--secondary))" }}>
      <div className="container">
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "reveal-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards" : "none",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: "hsla(44,100%,48%,0.15)", color: "hsl(var(--gold))" }}>
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-wider uppercase">Your Dreams, Our Mission</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-tight">
            Helping You Meet All Your Aspirations
          </h2>

          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto text-pretty leading-relaxed">
            Apply for an online personal loan at low interest rates and get instant approval. We promise to deliver you with services that are best on our capabilities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button variant="gold" size="xl" className="gap-2 text-base">
              Apply Now <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="text-base">
              Learn More
            </Button>
          </div>

          {}
          <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg mx-auto">
            {[
              { value: "2 Min", label: "Quick Apply" },
              { value: "10.5%", label: "Starting Rate" },
              { value: "₹50L", label: "Max Amount" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-serif" style={{ color: "hsl(var(--accent))" }}>{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspirationsSection;

