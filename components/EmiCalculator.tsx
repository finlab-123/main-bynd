import { useState, useMemo } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const formatCurrency = (n) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

const EmiCalculator = () => {
  const { ref, isVisible } = useScrollReveal();
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(24);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure;
    const emiVal =
      r === 0
        ? principal / n
        : (principal * r * Math.pow(1 + r, n)) /
          (Math.pow(1 + r, n) - 1);
    const total = emiVal * n;
    return {
      emi: emiVal,
      totalInterest: total - principal,
      totalPayment: total,
    };
  }, [principal, rate, tenure]);

  const principalPct = (principal / totalPayment) * 100;

  return (
    <section
      ref={ref}
      className="flex justify-center px-4 sm:px-6"
      style={{
        backgroundColor: "hsl(var(--section-grey))",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">

        {}
        <div
          className="text-center mb-10 md:mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards"
              : "none",
          }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mt-3">
            EMI Calculator
          </h2>
          <p className="text-sm sm:text-base mt-3">
            Estimate your monthly payments easily.
          </p>
        </div>

        {}
        <div
          className="grid gap-6 md:gap-8 md:grid-cols-2 items-stretch"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? "reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards"
              : "none",
          }}
        >

          {}
          <div className="bg-card rounded-2xl p-5 sm:p-8 md:p-12 border shadow-sm space-y-6 sm:space-y-8 w-full">

            {}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">Loan Amount</label>
                <span className="text-sm font-semibold text-green-700">
                  {formatCurrency(principal)}
                </span>
              </div>
              <Slider
                value={[principal]}
                onValueChange={([v]) => setPrincipal(v)}
                min={50000}
                max={5000000}
                step={10000}
                className="w-full"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>₹50K</span><span>₹50L</span>
              </div>
            </div>

            {}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">Interest Rate</label>
                <span className="text-sm font-semibold text-green-700">
                  {rate}%
                </span>
              </div>
              <Slider
                value={[rate]}
                onValueChange={([v]) =>
                  setRate(Math.round(v * 10) / 10)
                }
                min={5}
                max={25}
                step={0.1}
                className="w-full"
              />
            </div>

            {}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold">Tenure</label>
                <span className="text-sm font-semibold text-green-700">
                  {tenure} mo
                </span>
              </div>
              <Slider
                value={[tenure]}
                onValueChange={([v]) => setTenure(v)}
                min={6}
                max={360}
                step={6}
                className="w-full"
              />
            </div>
          </div>

          {}
          <div className="flex flex-col gap-6 w-full">

            {}
            <div
              className="rounded-2xl p-5 sm:p-6 md:p-10 text-white shadow-lg flex flex-col justify-between min-h-[160px]"
              style={{
                background:
                  "linear-gradient(135deg, hsl(84,70%,45%), hsl(100,60%,30%))",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[10px] sm:text-xs uppercase">
                  Monthly EMI
                </span>
              </div>

              <p className="text-2xl sm:text-3xl md:text-5xl font-serif break-words">
                {formatCurrency(emi)}
              </p>
            </div>

            {}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card p-4 sm:p-6 rounded-xl text-center flex flex-col justify-center min-h-[100px]">
                <p className="text-xs mb-1">Interest</p>
                <p className="font-serif text-lg sm:text-xl text-yellow-500 break-words">
                  {formatCurrency(totalInterest)}
                </p>
              </div>

              <div className="bg-card p-4 sm:p-6 rounded-xl text-center flex flex-col justify-center min-h-[100px]">
                <p className="text-xs mb-1">Total</p>
                <p className="font-serif text-lg sm:text-xl break-words">
                  {formatCurrency(totalPayment)}
                </p>
              </div>
            </div>

            {}
            <div className="bg-card p-4 sm:p-6 rounded-xl w-full">
              <div className="flex justify-between text-xs mb-2">
                <span>Principal</span>
                <span>Interest</span>
              </div>

              <div className="h-3 bg-gray-200 rounded-full overflow-hidden w-full">
                <div
                  className="h-full"
                  style={{
                    width: `${principalPct}%`,
                    background:
                      "linear-gradient(90deg, hsl(84,70%,45%), hsl(100,60%,30%))",
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiCalculator;
