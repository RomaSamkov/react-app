import { useState } from "react";
import TextField from "../../../servises/components/TextField/TextField";
import fields from "./fields";
import initialState from "./initialState";
import PropTypes from "prop-types";
// import { nanoid } from "nanoid";
import SubmitButton from "../../../servises/components/SubmitButton/SubmitButton";
import styles from "./PostSearchForm.module.scss";

const PostsSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { search } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        value={search}
        handleChange={handleChange}
        {...fields.search}
      />
      <SubmitButton text="Search" />
    </form>
  );
};
// class PostsSearchForm extends Component {
//   state = { ...initialState };
//   searchId = nanoid();

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
//       search: "",
//     });
//   };
//   render() {
//     const { search } = this.state;
//     const { handleChange, handleSubmit, searchId } = this;
//     return (
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <TextField
//           value={search}
//           id={searchId}
//           handleChange={handleChange}
//           {...fields.search}
//         />
//         <SubmitButton text="Search" />
//       </form>
//     );
//   }
// }

export default PostsSearchForm;

PostsSearchForm.defaultProps = {
  onSubmit: () => {},
};

PostsSearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
