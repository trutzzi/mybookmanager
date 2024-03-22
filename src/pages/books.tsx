import { Button, CircularProgress, Container } from "@mui/material";
import useTitler from "../hooks/titler";
import { Titler } from "../components/Titler";
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { COLORS } from "../constants/color";
import { Books, useGetBooks } from "../services/useGetBooks";
import { BooksTable } from "../components/booksTable";
import { useAxiosWithParam } from "../services/useAxiosWithParam";
import { BookForm } from "../components/bookForm";
import { ModalDetail } from "../components/modalDetail";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

export default function Books() {
  useTitler('Books')
  const { data, isLoading, isError } = useGetBooks()
  const [deleteBook] = useAxiosWithParam('books', 'DELETE');
  const [createDialog, setCreateDialog] = useState(false);

  return (
    <Container>
      <Titler title="Books" description="The list of all books" icon={<MenuBookTwoToneIcon sx={{ fontSize: 50, color: COLORS.PRIMARY }} />} />
      {isLoading && <CircularProgress />}
      {!isLoading && !isError && <BooksTable onDelete={deleteBook} data={data} />}
      <ModalDetail open={createDialog} onClose={() => setCreateDialog(false)} title={"Add new book"}>
        <BookForm onClose={() => setCreateDialog(false)} />
      </ModalDetail>
      <Button sx={{ marginTop: 3 }} variant={'contained'} onClick={() => setCreateDialog(true)} startIcon={<AddIcon />}>
        Add to list
      </Button>
    </Container>)
} 