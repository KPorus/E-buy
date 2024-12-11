import Image from "next/image";
import React from "react";
import logo from "/public/images/Logo.png";
import Link from "next/link";
import styles from './nav.module.scss'
const Nav = () => {
  const menu = [
    { label: "Home", href: "/" },
    { label: "Men", href: "/Men" },
    { label: "Women", href: "/Women" },
    { label: "Accesorries", href: "/Accesorries" },
    { label: "Blog", href: "/Blog" },
    { label: "Contact", href: "/Contact" },
  ];
  return (
    <div className={styles.menuContainer}>
      <Image src={logo} width={100} height={100} alt="Logo" />
      <div className={styles.menuList}>
        {menu.map((item, index) => (
          <Link key={index} href={item.href} className={styles.menuLabel}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
