import financialCalculatorTypes from "@/app/constants/calculators";
import Link from "next/link";

export default function FinancialCalculatorGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {financialCalculatorTypes.map((calc) => (
        <Link
          key={calc.id}
          href={calc.route}
          className="p-6 bg-white border border-zinc-200 rounded-lg hover:shadow-md hover:border-zinc-400 transition cursor-pointer text-left"
        >
          <h3 className="text-lg font-semibold text-zinc-800">{calc.title}</h3>
        </Link>
      ))}
    </div>
  );
}
