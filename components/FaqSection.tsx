import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is an insurance-integrated investment plan?", a: "It combines the safety of insurance with the growth potential of investments, giving you both protection and returns in a single structured product." },
  { q: "Who can benefit from Bynd Finserve's services?", a: "High Net-Worth Individuals (HNIs), SMEs, business owners, and anyone seeking structured, long-term financial planning with built-in risk management." },
  { q: "How is Bynd Finserve different from traditional financial advisors?", a: "We follow an advisory-first approach. We understand your goals before recommending any product, and every solution integrates protection with growth—unlike traditional advisors who often separate the two." },
  { q: "What is the minimum investment amount?", a: "There is no fixed minimum. Our advisors design customised plans based on your financial capacity and objectives. We cater to a range of investment profiles." },
  { q: "Are the investment plans tax-efficient?", a: "Yes. All our solutions are structured within prevailing regulatory frameworks to provide optimal tax benefits under applicable sections of the Income Tax Act." },
  { q: "How do I get started?", a: "Simply click on 'Book a Consultation' or 'Apply Now', and one of our advisors will reach out to understand your needs and craft a personalised financial strategy." },
];

const FaqSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards" : "none",
          }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "hsl(var(--gold))" }}>Got Questions?</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <div
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards" : "none",
          }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

