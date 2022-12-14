import { Component } from "react";
import styles from "./FormAddBook.module.scss";

class FormAddBook extends Component {
  state = {
    title: "",
    author: "",
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.setState({
      title: "",
      author: "",
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { title, author } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="">Title</label>
          <input
            value={title}
            name="title"
            onChange={handleChange}
            className={styles.field}
            type="text"
            placeholder="Enter Title"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="">Author</label>
          <input
            value={author}
            name="author"
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
