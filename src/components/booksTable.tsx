import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Books } from '../services/useGetBooks';
import { ButtonGroup, Checkbox, IconButton, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { COLORS } from '../constants/color';
import SelectedDrawer from './selectedDrawer';

const ACTIONS = {
  EDIT: "edit",
  SELECT: "select"
}
type ActionTypes = typeof ACTIONS[keyof typeof ACTIONS];

export default function BooksTable({ data }: { data: Books[] | undefined }) {
  const [selected, setSelected] = useState<number[]>([]);

  const limitDescription = (text: string) => {
    return <Tooltip title={text} > <Typography variant='body1'>{text.substring(0, 60) + '...'}</Typography></ Tooltip >
  }

  const getSelected = (findId: number) => selected.filter(id => id === findId).length

  const renderActions = (type: ActionTypes, row: Books) => {
    console.log(row);
    console.log('s', selected)
    switch (type) {
      case ACTIONS.EDIT:
        console.log('edit')
        break
      case ACTIONS.SELECT:
        if (!getSelected(row.id)) {
          setSelected([...selected, row.id])
        } else {
          const idToDelete = selected.filter(id => id !== row.id);
          setSelected(idToDelete)
        }
        break
    }
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell><b>Title</b></TableCell>
              <TableCell><b>Author</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Genre</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data!.map((row) => (
              <TableRow
                onClick={() => console.log(row.id)}
                key={row.author}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, background: getSelected(row.id) ? COLORS.CONTRAST : '' }}
              >
                <TableCell><IconButton onClick={() => renderActions(ACTIONS.SELECT, row)} >
                  <Checkbox color='primary' checked={Boolean(getSelected(row.id))} />
                </IconButton></TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell component="th" scope="row">
                  {row.author}
                </TableCell>
                <TableCell>{row?.description.length > 80 && limitDescription(row.description)}</TableCell>
                <TableCell>{row.genre}</TableCell>
                <TableCell>{
                  < ButtonGroup >
                    <IconButton onClick={() => renderActions(ACTIONS.EDIT, row)} >
                      <EditIcon color='primary' fontSize='small' />
                    </IconButton>
                  </ButtonGroup>
                }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
      <SelectedDrawer selected={selected} />
    </>
  );
}
