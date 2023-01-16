import { useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ close, children }) => {
  useEffect(() => {
    document.addEventListener("keydown", closeModal);

    return () => document.removeEventListener("keydown", closeModal);
  }, []);

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      close();
    }
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <span onClick={closeModal} className={styles.close}>
          X
        </span>
        {children}
      </div>
    </div>
  );
};

// class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener("keydown", this.closeModal);
//   }

//   closeModal = ({ target, currentTarget, code }) => {
//     if (target === currentTarget || code === "Escape") {
//       this.props.close();
//     }
//   };

//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.closeModal);
//   }

//   render() {
//     const { children } = this.props;
//     const { closeModal } = this;
//     return (
//       <div className={styles.overlay} onClick={closeModal}>
//         <div className={styles.modal}>
//           <span className={styles.close} onClick={closeModal}>
//             X
//           </span>
//           {children}
//         </div>
//       </div>
//     );
//   }
// }

export default Modal;
