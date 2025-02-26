import SelfHero from "../components/selfHostedComponents/SelfHero";
import SelfHeroInfo from "../components/selfHostedComponents/SelfHeroInfo";
import SelfAffordable from "../components/selfHostedComponents/SelfAffordable";
import SelfSecurity from "../components/selfHostedComponents/SelfSecurity";
import SelfEnterprise from "../components/selfHostedComponents/SelfEnterprise";
import SelfIntegration from "../components/selfHostedComponents/SelfIntegration";
import SelfPossibilities from "../components/selfHostedComponents/SelfPossibilities";
import SelfNeedHelp from "../components/selfHostedComponents/SelfNeedHelp";
const SelfHostedPage = () => {
    return (
      <div>
        <SelfHero />
        <SelfHeroInfo />
        <SelfAffordable/>
        <SelfSecurity/>
        <SelfEnterprise/>
        <SelfIntegration/>
        <SelfPossibilities/>
        <SelfNeedHelp/>
        {/* More Pricing Content Here */}
      </div>
    );
  };
  
  export default SelfHostedPage;