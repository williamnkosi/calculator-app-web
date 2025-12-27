import FinancialCalculatorGrid from "./components/calculator_button";
import SearchBar from "./components/search_bar";

export default function Home() {
  return (
    <div>
      <div className="justify-center flex row ">{/* <SearchBar /> */}</div>

      <div className="flex flex-col justify-start gap-4  ">
        <div className="border-b-2 border-zinc-800 pb-2">
          <h5 className="text-3xl font-semibold text-zinc-800">
            Financial Calculators
          </h5>
        </div>
        <FinancialCalculatorGrid />
      </div>
    </div>
  );
}
