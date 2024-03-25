import { CloseRounded } from "@mui/icons-material";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import { COLORS } from "../constants/color";

type ModalDetail = {
  title: string, children: React.ReactNode, footer?: React.ReactNode, open: boolean, onClose: () => void
};

const myStyle = {
  modal: { display: 'flex', justifyContent: 'space-between', flexDirection: 'column', background: COLORS.CONTRAST, padding: '15px', height: '100vh' }
}
export const ModalDetail: React.FC<ModalDetail> = ({ title, children, footer = null, open, onClose }) => {

  return (
    <Modal open={open}>
      <Box sx={myStyle.modal} >
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant="h6">
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseRounded />
          </IconButton>
        </Stack>
        <Stack>
          {children}
        </Stack>
        <Stack>
          {footer}
        </Stack>
      </Box>
    </Modal >
  )
}