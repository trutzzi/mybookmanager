import { CloseRounded } from "@mui/icons-material";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { COLORS } from "../constants/color";

type ModalDetail = {
  title: string, children: React.ReactNode, footer?: React.ReactNode
};
export const ModalDetail: React.FC<ModalDetail> = ({ title, children, footer = null }) => {
  const [isOpen, setIsOpen] = useState(true);
  const fn = () => console.log('my fn');

  return (
    <Modal open={isOpen}>
      <Box sx={{ displat: 'flex', justifyContent: 'space-between', flexDirection: 'column', background: COLORS.CONTRAST, padding: '15px', height: '50%', width: '50%', left: '50%', top: '50%', position: 'fixed', transform: 'translate(-50%,-50%)' }} >
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="h6">
            {title}
          </Typography>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <CloseRounded />
          </IconButton>
        </Stack>
        <Stack>
          {children(fn)}
        </Stack>
        <Stack>
          {footer}
        </Stack>
      </Box>
    </Modal >
  )
}