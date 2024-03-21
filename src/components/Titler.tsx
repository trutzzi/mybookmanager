import { Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  title: string,
  description: string,
  icon: ReactNode
}
export const Titler: FC<Props> = ({ title, description, icon }) => {

  return (
    <Stack direction={'row'} mb={5}>
      <Stack mr={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {icon}
      </Stack>
      <Stack>
        <Typography variant="h3">
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </Stack>
    </Stack >
  )
}