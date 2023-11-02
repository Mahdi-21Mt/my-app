import React from "react";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let DrawerClass = "Side_Drawer";

  if (props.ISOpen == true) {
    DrawerClass = "Side_Drawer open ";
  }

  return (
    <div className={DrawerClass}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
