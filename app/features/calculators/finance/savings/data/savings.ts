export interface SavingsCalculatorInput {
  initialBalance: number; // starting amount
  monthlyContribution: number; // monthly savings
  annualReturn: number; // annual return percentage
  timeHorizon: number; // years
}

export interface SavingsCalculatorResult {
  finalBalance: number;
  totalContributions: number;
  totalInterestEarned: number;
  averageMonthlyGrowth: number;
}
