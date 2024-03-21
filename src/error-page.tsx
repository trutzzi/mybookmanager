import { Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
import { PAGES } from "./routes/pages";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="body1">Sorry, an unexpected error has occurred.</Typography>
      <Typography variant="body1">
        {error.statusText || error.message}
      </Typography>
      <Link to={PAGES.HOME.link}>
        Go back
      </Link>
    </div>
  );
}