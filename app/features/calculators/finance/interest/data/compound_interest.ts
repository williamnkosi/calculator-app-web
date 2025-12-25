// models/compoundInterest.ts

export type CompoundingFrequency = 1 | 4 | 12;

export interface CompoundInterestInput {
  principal: number; // starting amount
  annualRate: number; // percentage (e.g. 7 for 7%)
  years: number; // investment duration
  compoundingFrequency: CompoundingFrequency;
  monthlyContribution?: number; // optional, defaults to 0
}

export interface CompoundInterestResult {
  finalBalance: number;
  totalContributions: number;
  totalInterest: number;
}
