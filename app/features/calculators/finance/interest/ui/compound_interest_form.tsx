"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import {
  CompoundingFrequency,
  CompoundInterestInput,
} from "../data/compound_interest";
import useInterestCalculator from "./use_interest";

export default function CompoundInterestForm() {
  const { input, setInput, result, calculateCompoundInterest } =
    useInterestCalculator();

  const handleInputChange = (
    field: keyof CompoundInterestInput,
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
          Compound Interest Calculator
        </h1>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <Input
            label="Principal Amount"
            value={input.principal}
            onChange={(val) => handleInputChange("principal", val)}
            type="range"
            min={100}
            max={1000000}
            step={1000}
            suffix="$"
          />

          <Input
            label="Annual Interest Rate"
            value={input.annualRate}
            onChange={(val) => handleInputChange("annualRate", val)}
            type="range"
            min={0}
            max={50}
            step={0.1}
            suffix="%"
          />

          <Input
            label="Investment Duration"
            value={input.years}
            onChange={(val) => handleInputChange("years", val)}
            type="range"
            min={1}
            max={50}
            step={1}
            suffix=" years"
          />

          <Input
            label="Compounding Frequency"
            value={input.compoundingFrequency}
            onChange={(val) =>
              handleInputChange(
                "compoundingFrequency",
                val as CompoundingFrequency
              )
            }
            type="select"
            options={[
              { value: 1, label: "Annually" },
              { value: 4, label: "Quarterly" },
              { value: 12, label: "Monthly" },
            ]}
            showValue={false}
          />

          <Input
            label="Monthly Contribution (Optional)"
            value={input.monthlyContribution || 0}
            onChange={(val) => handleInputChange("monthlyContribution", val)}
            type="number"
            suffix="$"
          />
        </div>

        {/* Calculate Button */}
        <Button buttonText="Calculate" onClick={calculateCompoundInterest} />

        {/* Results */}
        {result && (
          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  ${result.totalInterest.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
