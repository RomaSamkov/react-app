import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        <li>
          <NavLink className={getClassName} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/posts">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/books">
            Books
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
