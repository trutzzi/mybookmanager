import { Container, Drawer, Grid, IconButton, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function SelectedDrawer({ selected }: { selected: number[] }) {
  return (
    <div>
      <Drawer
        variant="persistent"

        color='primary'
        anchor={'bottom'}
        open={!!selected.length}
      >
        <Container sx={{ padding: 2 }}>
          <Grid container direction={'row'} alignContent={'space-between'} alignItems={'center'} justifyContent={'space-between'} >
            <Grid item>
              <Typography variant='body1'>
                <b>{selected.length}</b> book(s) selected.
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => alert('Not implemented yet')}>
                <DeleteForeverIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Drawer>
    </div >
  );
}