import SectionTitle from "@/components/common/section-title";
import React from "react";

const TopPicks = ({sectionTitle}:{sectionTitle:string}) => {
  return (
    <div id="ts--top-picks">
      <SectionTitle title={sectionTitle}/>
    </div>
  );
};

export default TopPicks;
