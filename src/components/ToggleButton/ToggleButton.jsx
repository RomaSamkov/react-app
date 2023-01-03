import { useState } from "react";
import styles from "./ToggleButton.module.scss";
import PropTypes from "prop-types";

const ToggleButton = ({ text }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };
  const className = isActive ? `${styles.btn} ${styles.active}` : styles.btn;
  return (
    <button type="button" className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

// class ToggleButton extends Component {
//   state = {
//     isActive: false,
//   };

//   handleClick = () => {
//     this.setState((prevState) => {
//       return {
//         isActive: !prevState.isActive,
//       };
//     });
//   };
//   render() {
//     const { text } = this.props;
//     const { isActive } = this.state;
//     const { handleClick } = this;
//     const className = isActive ? `${styles.btn} ${styles.active}` : styles.btn;
//     return (
//       <button type="button" className={className} onClick={handleClick}>
//         {text}
//       </button>
//     );
//   }
// }

export default ToggleButton;

ToggleButton.propTypes = {
  text: PropTypes.string.isRequired,
};
