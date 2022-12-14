import { useState } from "react";
import styles from "./Menu.module.scss";

const Menu = ({ menuItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, index) => {
    e.preventDefault();
    setActiveIndex(index);
  };
  const elements = menuItems.map(({ id, link, text }, index) => {
    const className =
      activeIndex === index ? `${styles.link} ${styles.active}` : styles.link;
    return (
      <li key={id}>
        <a
          href={link}
          className={className}
          onClick={(e) => handleClick(e, index)}
        >
          {text}
        </a>
      </li>
    );
  });
  return <ul className={styles.menu}>{elements}</ul>;
};

// class Menu extends Component {
//   state = {
//     activeIndex: 0,
//   };

//   handleClick(e, index) {
//     e.preventDefault();
//     this.setState({
//       activeIndex: index,
//     });
//   }

//   render() {
//     const { menuItems } = this.props;
//     const { activeIndex } = this.state;

//     const elements = menuItems.map(({ id, link, text }, index) => {
//       const className =
//         activeIndex === index ? `${styles.link} ${styles.active}` : styles.link;
//       return (
//         <li key={id}>
//           <a
//             href={link}
//             className={className}
//             onClick={(e) => this.handleClick(e, index)}
//           >
//             {text}
//           </a>
//         </li>
//       );
//     });
//     return <ul className={styles.menu}>{elements}</ul>;
//   }
// }

export default Menu;
