import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";

import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";
import styles from "@/styles//NavBar.module.css";
import { NavItem } from "@/pages";

export const NavBar = ({ currentItem, items, setNavItem }: any) => {
  const getTabIcon = useCallback((item: any) => {
    switch (item) {
      case NavItem.CARDS:
        return <IconSettings />;
      case NavItem.OFFERS:
        return <IconSettings />;
      case NavItem.FRIENDS:
        return <IconSettings />;
    }
  }, []);

  return (
    <nav className={styles.tabbar}>
      {items.map((item: any, index: React.Key | null | undefined) => (
        <span
          key={index}
          className={classNames([
            styles.tabItem,
            currentItem === item && styles.tabItemActive,
          ])}
          onClick={() => setNavItem(item)}
        >
          <span className={styles.icon}>NAVBAR_ITEM {getTabIcon(item)}</span>
        </span>
      ))}
    </nav>
  );
};

export default NavBar;
