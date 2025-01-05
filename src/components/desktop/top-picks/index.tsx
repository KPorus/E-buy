import SectionTitle from "@/components/common/section-title";
import ProductCard from "@/components/common/product-card";
import React from "react";
import VerticalSlider from "@/components/common/vertical-slider";

const TopPicks = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <div id="ts--top-picks">
      <SectionTitle title={sectionTitle} />

      {/* <div className="flex gap-4 overflow-x-auto">
        <ProductCard />
        <ProductCard />
      </div> */}
      <VerticalSlider/>
    </div>
  );
};

export default TopPicks;
