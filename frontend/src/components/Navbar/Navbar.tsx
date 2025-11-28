import React from "react";

import styles from "./Navbar.module.css";
import logo from "@assets/img/logo-light.png";

import { UserCircleIcon, BellIcon } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.navOptions}>
        <span className={styles.navOption}>Головна</span>
        <span className={styles.navOption}>Мої Курси</span>
        <span className={styles.navOption}>Про нас</span>
        <span className={styles.navOption}>Контакти</span>
      </div>
      <div>
        <BellIcon style={{ marginRight: "18px" }} />
        <UserCircleIcon />
      </div>
    </nav>
  );
}

export default Navbar;