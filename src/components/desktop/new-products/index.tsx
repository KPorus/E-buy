import SectionTitle from "@/components/common/section-title";
import VerticalSlider from "@/components/common/vertical-slider";
import { products } from "@/components/common/dummy/dummy";

const NewProducts = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <div id="ts--new-products-component">
      <SectionTitle title={sectionTitle} />
      {/* <VerticalSlider title={sectionTitle}/> */}
      <VerticalSlider title={sectionTitle} data={products} category="men" />
    </div>
  );
};

export default NewProducts;
