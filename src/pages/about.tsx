import { Container, Grid, Typography } from "@mui/material";
import useTitler from "../hooks/titler";
import Diversity3TwoToneIcon from '@mui/icons-material/Diversity3TwoTone';
import { Titler } from "../components/Titler";
import { COLORS } from "../constants/color";

export default function About() {
  useTitler('About team');

  return (
    <Container>
      <Typography variant="h3">

      </Typography>
      <Titler title=" About team" description="  Many thanks for this project." icon={<Diversity3TwoToneIcon sx={{ fontSize: 50, color: COLORS.PRIMARY }} />} />
      <Typography variant="h4" mb={3}>
        Valentin Truta
      </Typography>
      <Typography variant="h5" mb={1}>
        About me
      </Typography>
      <Typography variant="body1">
        Detail-oriented Front End Developer with approximately 4 years of experience, proficient in jQuery, JavaScript, CSS, ReactJs, and consuming Web APIs. Known for a meticulous approach to creating user-friendly interfaces and enhancing user experience.
      </Typography>
      <Typography variant="h5" mb={1} mt={2}>
        Libraries stacks: (what i used so far).
      </Typography>
      <Typography variant="body1">
        <Grid container >
          <Grid item>
            <ul>
              <li>
                Mantine UI
              </li>
              <li>
                Material UI
              </li>
              <li>
                React Router
              </li>
              <li>
                Lint
              </li>
              <li>
                Typescript
              </li>
              <li>
                CSS
              </li>
              <li>
                SCSS
              </li>
              <li>
                Tailwind
              </li>
              <li>
                HTML
              </li>
            </ul>
          </Grid>
          <Grid item>
            <ul>
              <li>
                Javascript
              </li>
              <li>
                jQuery
              </li>
              <li>
                React 18
              </li>
              <li>
                React Testing
              </li>
              <li>
                Unit Testing
              </li>
              <li>
                GraphQL
              </li>
              <li>
                Apollo
              </li>
              <li>
                Firebase
              </li>
            </ul>
          </Grid>
          <Grid item>
            <ul>
              <li>
                API Consuming
              </li>
              <li>
                Google Auth
              </li>
              <li>
                0Auth2
              </li>
              <li>
                Git
              </li>
              <li>
                DateFns
              </li>
              <li>
                Moment
              </li>
              <li>
                Redux
              </li>
            </ul>
          </Grid>
        </Grid>
      </Typography >
    </Container >
  )
}