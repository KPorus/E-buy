import { cva, VariantProps } from "class-variance-authority";
import styles from "./button.module.scss";
import React from "react";

const buttonStyles = cva(`${styles.btnContainer}`, {
  variants: {
    intent: {
      primary: "bg-[#4398fe] text-white",
      viewMore: styles.viewMore,
      purchase: styles.purchase,
      shopNow: styles.shopNow,
    },
    defaultVariants: {
      intent: "primary",
    },
  },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  onClick?: any;
  disabled?: boolean;
  Icon?: React.ReactNode;
  type?: "submit";
}
export default function Button({ Icon, intent, text, ...props }: ButtonProps) {
  return (
    <button
      id="ts--desktop-button"
      className={buttonStyles({ intent })}
      {...props}
      type="submit"
    >
      {Icon && <span className={styles.icon}>{Icon}</span>}
      <span>{text}</span>
    </button>
  );
}
