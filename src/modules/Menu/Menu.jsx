import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menu}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/posts">
            Posts
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
