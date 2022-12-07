import { Component } from "react";
import styles from "./Menu.module.scss";

class Menu extends Component {
  render() {
    const elements = this.props.menuItems.map(({ id, link, text }) => (
      <li key={id}>
        <a href={link} className={styles.link}>
          {text}
        </a>
      </li>
    ));
    return <ul className={styles.menu}>{elements}</ul>;
  }
}

export default Menu;
