"use client";

import { useState } from "react";
import type { LoanCalculatorInput, LoanCalculatorResult } from "../data/loan";

export const useLoanCalculator = () => {
  const [input, setInput] = useState<LoanCalculatorInput>({
    loanAmount: 200000,
    annualInterestRate: 5.5,
    loanTerm: 30,
    termUnit: "years",
  });

  const [result, setResult] = useState<LoanCalculatorResult | null>(null);

  const calculateLoan = () => {
    const { loanAmount, annualInterestRate, loanTerm, termUnit } = input;

    // Convert term to months
    const months = termUnit === "months" ? loanTerm : loanTerm * 12;

    // Monthly interest rate (annual rate / 12 / 100)
    const monthlyRate = annualInterestRate / 100 / 12;

    // Monthly payment formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    let monthlyPayment = 0;

    if (monthlyRate === 0) {
      // If interest rate is 0
      monthlyPayment = loanAmount / months;
    } else {
      const numerator = monthlyRate * Math.pow(1 + monthlyRate, months);
      const denominator = Math.pow(1 + monthlyRate, months) - 1;
      monthlyPayment = loanAmount * (numerator / denominator);
    }

    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - loanAmount;

    setResult({
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      loanTermMonths: months,
    });
  };

  return { input, setInput, result, calculateLoan };
};
