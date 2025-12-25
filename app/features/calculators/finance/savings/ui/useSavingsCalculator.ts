"use client";

import { useState } from "react";
import type {
  SavingsCalculatorInput,
  SavingsCalculatorResult,
} from "../data/savings";

export const useSavingsCalculator = () => {
  const [input, setInput] = useState<SavingsCalculatorInput>({
    initialBalance: 5000,
    monthlyContribution: 500,
    annualReturn: 7,
    timeHorizon: 10,
  });

  const [result, setResult] = useState<SavingsCalculatorResult | null>(null);

  const calculateSavings = () => {
    const { initialBalance, monthlyContribution, annualReturn, timeHorizon } =
      input;

    // Monthly return rate (annual return / 12 / 100)
    const monthlyReturn = annualReturn / 100 / 12;

    // Total months
    const totalMonths = timeHorizon * 12;

    // Future value of initial balance: P * (1 + r)^n
    const fvInitialBalance =
      initialBalance * Math.pow(1 + monthlyReturn, totalMonths);

    // Future value of monthly contributions (Future Value of Annuity)
    // FV = PMT * [((1 + r)^n - 1) / r]
    const fvMonthlyContributions =
      monthlyContribution *
      ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn);

    const finalBalance = fvInitialBalance + fvMonthlyContributions;
    const totalContributions =
      initialBalance + monthlyContribution * totalMonths;
    const totalInterestEarned = finalBalance - totalContributions;
    const averageMonthlyGrowth = (finalBalance - initialBalance) / totalMonths;

    setResult({
      finalBalance: Math.round(finalBalance * 100) / 100,
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalInterestEarned: Math.round(totalInterestEarned * 100) / 100,
      averageMonthlyGrowth: Math.round(averageMonthlyGrowth * 100) / 100,
    });
  };

  return { input, setInput, result, calculateSavings };
};
