import { useState } from "react";
import InvestmentForm, { type TInvestment } from "./components/InvestmentForm";
import Results from "./components/Results";

function App() {
  const [investment, setInvestment] = useState<TInvestment>({
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0,
    initialInvestment: 0,
  });

  return (
    <>
      <InvestmentForm
        onChange={(investment) => setInvestment(investment)}
        value={investment}
      />
      <Results investment={investment} />
    </>
  );
}

export default App;
