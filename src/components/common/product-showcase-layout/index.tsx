import { HotDealDTO } from "@/types/dummy/HomeHotDeals";

type NotificationData = HotDealDTO[] | any;


interface NotificationProps {
  Component: React.ComponentType<any>;
  data?: NotificationData; 
}

interface ProductShowcaseProps {
  title: string;
  Component: React.ComponentType<{ sectionTitle: string }>;
  data?: any;
  notifications: NotificationProps[];
}

const ProductShowcase = ({
  title,
  Component,
  notifications,
}: ProductShowcaseProps) => {
  return (
    <div className="flex gap-5 mb-12">
      {/* Notifications Section */}
      <div className="w-1/2 flex flex-col gap-5">
        {notifications.map((notification, index) => {
          const { Component} = notification;
          return <Component key={index} data={notification.data} />;
        })}
      </div>

      {/* Main Showcase Component */}
      <Component sectionTitle={title} />
    </div>
  );
};

export default ProductShowcase;
