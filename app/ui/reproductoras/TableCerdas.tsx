import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { styled } from '@mui/material/styles';
import { tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.background.default,
    fontWeight: "900"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(
  codigo: string,
  fecha: string,
  raza: string,
  estado: string
) {
  return { codigo, fecha, raza, estado };
}

const rows = [
  createData("c0001", "12-01-12", "cualquiera", "activa"),
  createData("c0002", "12-01-13", "cualquiera", "lactancia"),
];

export default function () {
  return (
    <section className="shadow-lg mt-3 py-3 px-4 rounded-sm">
      <h3 className="text-bold">Cerdas Reproductoras activas</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Codigo</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Edad</StyledTableCell>
            <StyledTableCell align="right">Raza</StyledTableCell>
            <StyledTableCell align="right">Estado</StyledTableCell>
            <StyledTableCell align="right">Último parto</StyledTableCell>
            <StyledTableCell align="right">N° Partos</StyledTableCell>
            <StyledTableCell align="right">Proximo Evento</StyledTableCell>
            <StyledTableCell align="right">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.codigo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.codigo}
              </TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.raza}</TableCell>
              <TableCell align="right">{row.estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
