import Nav from "@/components/desktop/nav";
import Hero from "@/components/desktop/hero";
import FeatureProducts from "./highlighted-offers";
import ProductShowcase from "../common/product-showcase-layout";
const DesktopPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeatureProducts/>
      <ProductShowcase title="Feature Products"/>
    </div>
  );
};

export default DesktopPage;
