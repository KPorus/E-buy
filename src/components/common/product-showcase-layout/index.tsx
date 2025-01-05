import React from "react";
import OfferNotificationCard from "../offer-notification-card";

interface ComponentProps {
  title: string;
  Component: React.ComponentType<{ sectionTitle: string }>;
}

const ProductShowcase = ({ title, Component }: ComponentProps) => {
  return (
    <div className="flex gap-5 mb-12">
      <div className="w-1/2">
        <OfferNotificationCard />
      </div>
      <Component sectionTitle={title} />
    </div>
  );
};

export default ProductShowcase;
