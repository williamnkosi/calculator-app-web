import { useState } from "react";
import {
  CompoundInterestInput,
  CompoundInterestResult,
} from "../data/compound_interest";

export default function useInterestCalculator() {
  const [input, setInput] = useState<CompoundInterestInput>({
    principal: 1000,
    annualRate: 7,
    years: 10,
    compoundingFrequency: 12,
    monthlyContribution: 0,
  });

  const [result, setResult] = useState<CompoundInterestResult | null>(null);

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

  return { input, setInput, result, setResult, calculateCompoundInterest };
}
