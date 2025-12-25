"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import { useLoanCalculator } from "./useLoanCalculator";
import type { LoanCalculatorInput } from "../data/loan";

export default function LoanCalculatorForm() {
  const { input, setInput, result, calculateLoan } = useLoanCalculator();

  const handleInputChange = (
    field: keyof LoanCalculatorInput,
    value: number | string
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
          Loan Calculator
        </h1>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <Input
            label="Loan Amount"
            value={input.loanAmount}
            onChange={(val) => handleInputChange("loanAmount", val)}
            type="range"
            min={10000}
            max={1000000}
            step={10000}
            suffix="$"
          />

          <Input
            label="Annual Interest Rate (APR)"
            value={input.annualInterestRate}
            onChange={(val) => handleInputChange("annualInterestRate", val)}
            type="range"
            min={0}
            max={15}
            step={0.1}
            suffix="%"
          />

          <Input
            label="Loan Term"
            value={input.loanTerm}
            onChange={(val) => handleInputChange("loanTerm", val)}
            type="range"
            min={1}
            max={input.termUnit === "years" ? 50 : 600}
            step={input.termUnit === "years" ? 1 : 12}
            suffix={input.termUnit === "years" ? " years" : " months"}
          />

          <Input
            label="Term Unit"
            value={input.termUnit === "years" ? 1 : 2}
            onChange={(val) =>
              handleInputChange("termUnit", val === 1 ? "years" : "months")
            }
            type="select"
            options={[
              { value: 1, label: "Years" },
              { value: 2, label: "Months" },
            ]}
            showValue={false}
          />
        </div>

        {/* Calculate Button */}
        <Button buttonText="Calculate" onClick={calculateLoan} />

        {/* Results */}
        {result && (
          <div className="border-t border-zinc-200 pt-8 mt-8">
            <h2 className="text-xl font-bold text-zinc-900 mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
                <p className="text-sm text-zinc-600 mb-1">Monthly Payment</p>
                <p className="text-2xl font-bold text-zinc-900">
                  ${result.monthlyPayment.toLocaleString()}
                </p>
              </div>
              <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
                <p className="text-sm text-zinc-600 mb-1">Total Payment</p>
                <p className="text-2xl font-bold text-zinc-900">
                  ${result.totalPayment.toLocaleString()}
                </p>
              </div>
              <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
                <p className="text-sm text-zinc-600 mb-1">Total Interest</p>
                <p className="text-2xl font-bold text-red-600">
                  ${result.totalInterest.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <p className="text-sm text-zinc-600">
                <span className="font-semibold">Loan Term:</span>{" "}
                {result.loanTermMonths} months (
                {Math.round(result.loanTermMonths / 12)} years)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
