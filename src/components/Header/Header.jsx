import "./Header.css";

import React from "react";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

export const Header = ({ menuItems }) => {
  return (
    <div>
      <HeaderMenu items={menuItems} />
      <h1>Welcome to Site!</h1>
    </div>
  );
};
