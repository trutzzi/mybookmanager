import { useFormik } from 'formik';
import { Books } from '../services/useGetBooks';
import { Button, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { useAxiosWithParam } from '../services/useAxiosWithParam';
import { BookSchema, GENRE } from '../constants/forms';
import { COLORS } from '../constants/color';
import { sortedObject } from '../utils/sortObject';

type BookForm = {
  data?: Books,
  onClose: () => void;
};


export const BookForm: React.FC<BookForm> = ({ data, onClose }) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const [editBook, errorUpdate] = useAxiosWithParam('books', 'PUT');
  const [newBook] = useAxiosWithParam('books', 'POST');

  const isEdited = () => {
    if (data && !Object.keys(formik.errors).length) {
      const dataWithoutId = { ...data };
      delete dataWithoutId.id;
      return JSON.stringify(sortedObject(formik.values)) !== JSON.stringify(sortedObject(dataWithoutId))
    } else if (!data && !Object.keys(formik.errors).length) {
      return true
    }
  };

  const formik = useFormik({
    initialValues: {
      author: data?.author || '',
      description: data?.description || '',
      genre: data?.genre || '',
      title: data?.title || '',
    },
    validationSchema: BookSchema,
    onSubmit: values => {
      /**
       * Based on data should create or update
       */
      if (data) {
        editBook(data.id, values)
        if (!errorUpdate) {
          onClose()
        }
      } else {
        newBook(null, values)
        if (!errorUpdate) {
          onClose()
        }
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3} direction={'column'}>
        <TextField
          id="title"
          label="Title"
          name="title"
          error={!!formik.errors.title}
          helperText={formik.errors.title}
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <TextField
          id="author"
          label="Author"
          name="author"
          error={!!formik.errors.author}
          helperText={formik.errors.author}
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        <TextField multiline
          id="description"
          label="Description"
          style={{ background: COLORS.CONTRAST, padding: 5 }}
          name="description"
          onChange={formik.handleChange}
          error={!!formik.errors.description}
          helperText={formik.errors.description}
          value={formik.values.description}
        />
        <InputLabel id="genre">Genre</InputLabel>
        <Select
          id="genre"
          label="genre"
          color='secondary'
          name="genre"
          onChange={formik.handleChange}
          value={formik.values.genre}
        >
          {GENRE.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
        </Select>

      </Stack>
      <Button disabled={Object.keys(formik.errors).length > 1 || !isEdited()} type='submit' sx={{ marginTop: 5 }} variant='contained'>{data ? 'Update book' : 'Add book'}</Button>
    </form >
  );
};