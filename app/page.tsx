import FinancialCalculatorGrid from "./components/calculator_button";
import HeaderBar from "./components/header_bar";
import SearchBar from "./components/search_bar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  justify-items-start bg-zinc-50 font-sans ">
      <HeaderBar />
      <div className="justify-center flex row mt-8">
        <SearchBar />
      </div>

      <div className="flex flex-col justify-start mt-16 px-32">
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
