import { Component } from "react";
import styles from "./ToggleButton.module.scss";

class ToggleButton extends Component {
  state = {
    isActive: false,
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        isActive: !prevState.isActive,
      };
    });
  };
  render() {
    const { text } = this.props;
    const { isActive } = this.state;
    const { handleClick } = this;
    const className = isActive ? `${styles.btn} ${styles.active}` : styles.btn;
    return (
      <button type="button" className={className} onClick={handleClick}>
        {text}
      </button>
    );
  }
}

export default ToggleButton;
