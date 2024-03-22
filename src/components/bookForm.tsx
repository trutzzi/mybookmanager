import { useFormik } from 'formik';
import { useState } from 'react';
import { Books } from '../services/useGetBooks';

type BookForm = {
  data: Books,
  onAction: Function,
};

export const BookForm: React.FC<BookForm> = ({ data, onAction }) => {
  const [selected, setSelected] = useState({});

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      author: data.author,
      description: data.description,
      genre: data.genre,
      title: data.title,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="author">Author</label>
      <input
        id="author"
        name="author"
        type="author"
        onChange={formik.handleChange}
        value={formik.values.author}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="description"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <label htmlFor="genre">Genre</label>
      <input
        id="genre"
        name="genre"
        type="genre"
        onChange={formik.handleChange}
        value={formik.values.genre}
      />
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <button onClick={onAction} type="submit">Submit</button>
    </form>
  );
};