import Nav from "@/components/desktop/nav";
import Hero from "@/components/desktop/hero";
import FeatureProducts from "./highlighted-offers";
import ProductShowcase from "../common/product-showcase-layout";
import TopPicks from "./top-picks";
import NewProducts from "./new-products";
const DesktopPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeatureProducts/>
      <ProductShowcase title="Feature Products" Component={TopPicks}/>
      <ProductShowcase title="New Products" Component={NewProducts}/>
      {/* <ProductShowcase title="New Products" Component={}/> */}
    </div>
  );
};

export default DesktopPage;
