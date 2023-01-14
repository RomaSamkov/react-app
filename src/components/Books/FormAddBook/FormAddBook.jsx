import { useState } from "react";
import styles from "./FormAddBook.module.scss";
import PropTypes from "prop-types";

const FormAddBook = ({ onSubmit }) => {
  const [state, setState] = useState({
    title: "",
    author: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I dont understand how to code");
    onSubmit({ ...state });
    setState({
      title: "",
      author: "",
    });
  };

  const { title, author } = state;

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
};

// class FormAddBook extends Component {
//   state = {
//     title: "",
//     author: "",
//   };

//   handleChange = ({ target }) => {
//     const { value, name } = target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     onSubmit({ ...this.state });
//     this.setState({
//       title: "",
//       author: "",
//     });
//   };

//   render() {
//     const { handleChange, handleSubmit } = this;
//     const { title, author } = this.state;

//     return (
//       <form onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="">Title</label>
//           <input
//             value={title}
//             name="title"
//             onChange={handleChange}
//             className={styles.field}
//             type="text"
//             placeholder="Enter Title"
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="">Author</label>
//           <input
//             value={author}
//             name="author"
//             onChange={handleChange}
//             className={styles.field}
//             type="text"
//             placeholder="Enter Author"
//           />
//         </div>
//         <button className={styles.btn}>Add book</button>
//       </form>
//     );
//   }
// }

export default FormAddBook;

FormAddBook.defaultProps = {
  onSubmit: () => {},
};

FormAddBook.propTypes = {
  onSubmit: PropTypes.func,
};
