import SectionTitle from "@/components/common/section-title";
import VerticalSlider from "@/components/common/vertical-slider";
import { products } from "@/components/common/dummy/dummy";
const TopPicks = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <div id="ts--top-picks-component">
      <SectionTitle title={sectionTitle} />
      {/* <VerticalSlider title={sectionTitle}/> */}
      <VerticalSlider title={sectionTitle} data={products} category="women" />
    </div>
  );
};

export default TopPicks;
