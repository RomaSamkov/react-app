import "./HeaderMenu.css";

import React from "react";

export const HeaderMenu = ({ items }) => {
  const elements = items.map((item) => (
    <li key={item.id}>
      <a href={item.link} className="header__menu-link">
        {item.text}
      </a>
    </li>
  ));

  return <ul className="header__menu">{elements}</ul>;
};
