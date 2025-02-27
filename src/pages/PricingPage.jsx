import PricingHero from '../components/pricingComponents/PricingHero';
import Administrator from '../components/pricingComponents/pricingAdministratorSection/Administrator';
import PricingFAQ from '../components/pricingComponents/pricingFAQ_Section/PricingFAQ';
import PricingPlanTable from '../components/pricingComponents/pricingPlansSection/PricingPlanTable';


const PricingPage = () => {
  return (
    <div>
      <PricingHero />
      <PricingPlanTable/>
      <Administrator/>
      <PricingFAQ/>
      
      {/* More Pricing Content Here */}
    </div>
  );
};

export default PricingPage;