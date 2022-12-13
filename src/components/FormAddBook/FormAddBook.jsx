import { Component } from "react";
import styles from "./FormAddBook.module.scss";

class FormAddBook extends Component {
  state = {
    title: "",
    author: "",
  };

  handleChange = () => {
    console.log("onChange");
  };

  render() {
    const { handleChange } = this;

    return (
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="">Title</label>
          <input
            onChange={handleChange}
            className={styles.field}
            type="text"
            placeholder="Enter Title"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="">Author</label>
          <input
            onChange={handleChange}
            className={styles.field}
            type="text"
            placeholder="Enter Author"
          />
        </div>
        <button className={styles.btn}>Add book</button>
      </form>
    );
  }
}

export default FormAddBook;
