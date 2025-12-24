"use client";

import { useState } from "react";
import type {
  CompoundInterestInput,
  CompoundInterestResult,
  CompoundingFrequency,
} from "@/app/types/calculators/finance/interest/compound_interest";

export default function InterestCalculator() {
  const [input, setInput] = useState<CompoundInterestInput>({
    principal: 1000,
    annualRate: 7,
    years: 10,
    compoundingFrequency: 12,
    monthlyContribution: 0,
  });

  const [result, setResult] = useState<CompoundInterestResult | null>(null);

  const handleInputChange = (
    field: keyof CompoundInterestInput,
    value: number
  ) => {
    setInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateCompoundInterest = () => {
    const {
      principal,
      annualRate,
      years,
      compoundingFrequency,
      monthlyContribution = 0,
    } = input;

    // Calculate compound interest formula: A = P(1 + r/n)^(nt)
    const rate = annualRate / 100;
    const n = compoundingFrequency;
    const t = years;

    const compoundPart = Math.pow(1 + rate / n, n * t);
    const finalBalance =
      principal * compoundPart + monthlyContribution * 12 * t;

    const totalContributions = principal + monthlyContribution * 12 * years;
    const totalInterest = finalBalance - totalContributions;

    setResult({
      finalBalance: Math.round(finalBalance * 100) / 100,
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
    });
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-sm border border-zinc-200">
        <h1 className="text-3xl font-bold text-zinc-900 mb-8">
          Compound Interest Calculator
        </h1>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          {/* Principal */}
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Principal Amount: ${input.principal}
            </label>
            <input
              type="range"
              min="100"
              max="1000000"
              step="1000"
              value={input.principal}
              onChange={(e) =>
                handleInputChange("principal", parseFloat(e.target.value))
              }
              className="w-full"
            />
            <input
              type="number"
              value={input.principal}
              onChange={(e) =>
                handleInputChange("principal", parseFloat(e.target.value))
              }
              className="mt-2 w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
              placeholder="Enter principal amount"
            />
          </div>

          {/* Annual Rate */}
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Annual Interest Rate: {input.annualRate}%
            </label>
            <input
              type="range"
              min="0"
              max="50"
              step="0.1"
              value={input.annualRate}
              onChange={(e) =>
                handleInputChange("annualRate", parseFloat(e.target.value))
              }
              className="w-full"
            />
            <input
              type="number"
              value={input.annualRate}
              onChange={(e) =>
                handleInputChange("annualRate", parseFloat(e.target.value))
              }
              className="mt-2 w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
              placeholder="Enter annual rate"
            />
          </div>

          {/* Years */}
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Investment Duration: {input.years} years
            </label>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={input.years}
              onChange={(e) =>
                handleInputChange("years", parseFloat(e.target.value))
              }
              className="w-full"
            />
            <input
              type="number"
              value={input.years}
              onChange={(e) =>
                handleInputChange("years", parseFloat(e.target.value))
              }
              className="mt-2 w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
              placeholder="Enter years"
            />
          </div>

          {/* Compounding Frequency */}
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Compounding Frequency
            </label>
            <select
              value={input.compoundingFrequency}
              onChange={(e) =>
                handleInputChange(
                  "compoundingFrequency",
                  parseFloat(e.target.value) as CompoundingFrequency
                )
              }
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
            >
              <option value={1}>Annually</option>
              <option value={4}>Quarterly</option>
              <option value={12}>Monthly</option>
            </select>
          </div>

          {/* Monthly Contribution */}
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Monthly Contribution (Optional): ${input.monthlyContribution || 0}
            </label>
            <input
              type="number"
              value={input.monthlyContribution || 0}
              onChange={(e) =>
                handleInputChange(
                  "monthlyContribution",
                  parseFloat(e.target.value)
                )
              }
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:border-zinc-900"
              placeholder="Enter monthly contribution"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateCompoundInterest}
          className="w-full bg-zinc-900 text-white font-semibold py-3 rounded-lg hover:bg-zinc-800 transition mb-8"
        >
          Calculate
        </button>

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
