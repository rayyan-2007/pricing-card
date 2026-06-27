import Data from "./Data/pricingPlans";
import "./App.css";
import PricingCard from "./Components/pricingCard";

const App = () => {
  return (
    <>
      <div className="container">
        {Data.map((priceData) => (
          <PricingCard key={priceData.id} data={priceData} />
        ))}
        
      </div>
    </>
  );
}

export default App