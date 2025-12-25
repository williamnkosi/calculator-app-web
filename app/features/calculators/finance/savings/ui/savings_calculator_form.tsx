"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import { useSavingsCalculator } from "./useSavingsCalculator";
import type { SavingsCalculatorInput } from "../data/savings";

export default function SavingsCalculatorForm() {
  const { input, setInput, result, calculateSavings } = useSavingsCalculator();

  const handleInputChange = (
    field: keyof SavingsCalculatorInput,
    value: number
  ) => {
    setInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-sm border border-zinc-200">
        <h1 className="text-3xl font-bold text-zinc-900 mb-8">
          Savings Calculator
        </h1>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <Input
            label="Initial Balance"
            value={input.initialBalance}
            onChange={(val) => handleInputChange("initialBalance", val)}
            type="range"
            min={0}
            max={500000}
            step={5000}
            suffix="$"
          />

          <Input
            label="Monthly Contribution"
            value={input.monthlyContribution}
            onChange={(val) => handleInputChange("monthlyContribution", val)}
            type="range"
            min={0}
            max={10000}
            step={100}
            suffix="$"
          />

          <Input
            label="Annual Return"
            value={input.annualReturn}
            onChange={(val) => handleInputChange("annualReturn", val)}
            type="range"
            min={0}
            max={15}
            step={0.1}
            suffix="%"
          />

          <Input
            label="Time Horizon"
            value={input.timeHorizon}
            onChange={(val) => handleInputChange("timeHorizon", val)}
            type="range"
            min={1}
            max={50}
            step={1}
            suffix=" years"
          />
        </div>

        {/* Calculate Button */}
        <Button buttonText="Calculate" onClick={calculateSavings} />

        {/* Results */}
        {result && (
          <div className="border-t border-zinc-200 pt-8 mt-8">
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
                <p className="text-sm text-zinc-600 mb-1">Final Balance</p>
                <p className="text-2xl font-bold text-zinc-900">
                  ${result.finalBalance.toLocaleString()}
                </p>
              </div>
              <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
                <p className="text-sm text-zinc-600 mb-1">
                  Total Contributions
                </p>
                <p className="text-2xl font-bold text-zinc-900">
                  ${result.totalContributions.toLocaleString()}
                </p>
              </div>
              <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
                <p className="text-sm text-zinc-600 mb-1">
                  Total Interest Earned
                </p>
                <p className="text-2xl font-bold text-green-600">
                  ${result.totalInterestEarned.toLocaleString()}
                </p>
              </div>
              <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
                <p className="text-sm text-zinc-600 mb-1">
                  Average Monthly Growth
                </p>
                <p className="text-2xl font-bold text-zinc-900">
                  ${result.averageMonthlyGrowth.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
