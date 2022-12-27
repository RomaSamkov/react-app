import { Component } from "react";
import styles from "./Modal.module.scss";

class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.closeModal);
  }
  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      this.props.close();
    }
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeModal);
  }

  render() {
    const { children } = this.props;
    const { closeModal } = this;
    return (
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
          <span className={styles.close} onClick={closeModal}>
            X
          </span>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
