import * as Yup from "yup";

export const GENRE = [
  "Dystopian",
  "Southern Gothic",
  "Romance",
  "Fantasy",
  "Science Fiction",
  "Young Adult",
  "Non-Fiction",
  "Historical Fiction",
  "Classic",
];
export const BookSchema = Yup.object().shape({
  author: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(10, "Too Short!")
    .max(400, "Too Long!")
    .required("Required"),
  genre: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
