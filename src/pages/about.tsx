import { Container, Typography } from "@mui/material";
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
      <Typography variant="body1">

      </Typography>
      <Titler title=" About team" description="  Many thanks for this project." icon={<Diversity3TwoToneIcon sx={{ fontSize: 50, color: COLORS.PRIMARY }} />} />

    </Container>
  )
}