export interface LoanCalculatorInput {
  loanAmount: number; // in dollars
  annualInterestRate: number; // percentage (e.g. 5.5 for 5.5%)
  loanTerm: number; // duration
  termUnit: "months" | "years"; // months or years
}

export interface LoanCalculatorResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  loanTermMonths: number;
}
