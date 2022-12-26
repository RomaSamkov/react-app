import { Component } from "react";
import styles from "./Modal.module.scss";

class Modal extends Component {
  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <span className={styles.close}>X</span>
        </div>
      </div>
    );
  }
}

export default Modal;
