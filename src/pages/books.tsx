import { CircularProgress, Container } from "@mui/material";
import useTitler from "../hooks/titler";
import { Titler } from "../components/Titler";
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { COLORS } from "../constants/color";
import { useGetBooks } from "../services/useGetBooks";
import TableBooks from "../components/booksTable";

export default function Books() {
  useTitler('Books')
  const { data, isLoading, isError } = useGetBooks()

  console.log(data, isLoading);

  return (
    <Container>
      <Titler title="Books" description="The list of all books" icon={<MenuBookTwoToneIcon sx={{ fontSize: 50, color: COLORS.PRIMARY }} />} />
      {isLoading && <CircularProgress />}
      {!isLoading && !isError && <TableBooks data={data} />}
    </Container>)
} 