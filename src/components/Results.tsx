import { calculateInvestmentResults, formatter } from "../lib/investment";
import type { TInvestment } from "./InvestmentForm";

const Results = ({ investment }: { investment: TInvestment }) => {
  console.log(investment);
  const data = calculateInvestmentResults(investment);
  const initialInvestment =
    data[0]?.valueEndOfYear - data[0]?.interest - data[0]?.annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ year, valueEndOfYear, interest, annualInvestment }) => {
          const totalInterest =
            valueEndOfYear - annualInvestment * year - initialInvestment;
          const totalAmountInvested = valueEndOfYear - totalInterest;

          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
