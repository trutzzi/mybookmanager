import { Button, CircularProgress, Container } from "@mui/material";
import useTitler from "../hooks/titler";
import { Titler } from "../components/Titler";
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { COLORS } from "../constants/color";
import { Books, useGetBooks } from "../services/useGetBooks";
import { BooksTable } from "../components/booksTable";
import { useAxiosRequest } from "../services/useAxiosRequest";

export default function Books() {
  useTitler('Books')
  const { data, isLoading, isError } = useGetBooks()
  const [deleteBook] = useAxiosRequest('books', 'DELETE');
  const [newBook] = useAxiosRequest('books', 'PUT');

  console.log(data, isLoading);

  const handleCreateBook = (id: number, payload: Omit<Books, 'id'>) => {
    newBook(id, payload)
  }

  return (
    <Container>
      <Titler title="Books" description="The list of all books" icon={<MenuBookTwoToneIcon sx={{ fontSize: 50, color: COLORS.PRIMARY }} />} />
      {isLoading && <CircularProgress />}
      {!isLoading && !isError && <BooksTable onDelete={deleteBook} data={data} />}

      <Button onClick={() => handleCreateBook(1, {
        title: 'new title',
        author: 'new author',
        genre: 'new genre',
        description: 'new description',
      })}>Test</Button>
    </Container>)
} 