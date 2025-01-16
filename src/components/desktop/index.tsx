import Nav from "@/components/desktop/nav";
import Hero from "@/components/desktop/hero";
import FeatureProducts from "./highlighted-offers";
import ProductShowcase from "../common/product-showcase-layout";
import TopPicks from "./top-picks";
import NewProducts from "./new-products";
import HomeNotificationCard from "../common/home-notification-card";
import { hotdeals } from "../common/dummy/dummy";
import { HotDealDTO } from "@/types/dummy/HomeHotDeals";
const DesktopPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeatureProducts/>
      <ProductShowcase
        title="Feature Products"
        Component={TopPicks}
        notifications={[
          {
            Component: HomeNotificationCard,
            data: hotdeals as HotDealDTO[],
          }
        ]}
      />
      <ProductShowcase
        title="New Products"
        Component={NewProducts}
        notifications={[
          {
            Component: HomeNotificationCard,
            data: [{ message: "Notification 2: New Products!" }],
          }
        ]}
      />
      {/* <ProductShowcase title="Feature Products" Component={TopPicks}/>
      <ProductShowcase title="New Products" Component={NewProducts}/> */}
      {/* <ProductShowcase title="New Products" Component={}/> */}
    </div>
  );
};

export default DesktopPage;
