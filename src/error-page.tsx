import { Button, Container, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import { PAGES } from "./routes/pages";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: 'center' }}>
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 84 }} />
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="body1">Sorry, an unexpected error has occurred.</Typography>
      <Typography variant="caption" sx={{ display: 'block' }}>
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText}
      </Typography>
      <Button onClick={() => navigate(PAGES.HOME.link)} variant="contained">
        Go home
      </Button>
    </Container>
  );
} 