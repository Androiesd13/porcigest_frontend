import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Tooltip,
  IconButton,
} from "@mui/material";

import {
  DeleteRounded,
  CreateRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.background.default,
    fontWeight: "900",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: "900",
  },
}));

function createData(
  codigo: string,
  edad: number,
  raza: string,
  estado: string
) {
  return { codigo, edad, raza, estado };
}

const rows = [
  createData("c0001", 2, "cualquiera", "activa"),
  createData("c0002", 3, "cualquiera", "lactancia"),
];

// edad => fechaActual - fechaNacimiento
//

const colums = [
  "fecha",
  "edad",
  "raza",
  "estado",
  "último parto",
  "n° partos",
  "proximo_evento",
  "acciones",
];

export default function TableCerdas() {
  return (
    <section className="shadow-lg mt-3 py-3 px-4 rounded-sm">
      <h3 className="text-bold">Cerdas Reproductoras activas</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Codigo</StyledTableCell>
            <StyledTableCell align="left">Edad</StyledTableCell>
            <StyledTableCell align="left">Edad</StyledTableCell>
            <StyledTableCell align="left">Raza</StyledTableCell>
            <StyledTableCell align="left">Estado</StyledTableCell>
            <StyledTableCell align="left">Último parto</StyledTableCell>
            <StyledTableCell align="left">N° Partos</StyledTableCell>
            <StyledTableCell align="left">Proximo Evento</StyledTableCell>
            <StyledTableCell align="left">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.codigo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.codigo}
              </StyledTableCell>
              <TableCell align="left">{row.edad}</TableCell>
              <TableCell align="left">{row.raza}</TableCell>
              <TableCell align="left">
                <Chip label={row.estado} />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="center">
                <Tooltip title="Editar">
                  <IconButton color="success">
                    <CreateRounded />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Detalles">
                  <IconButton color="info">
                    <VisibilityRounded />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Eliminar">
                  <IconButton color="error">
                    <DeleteRounded />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
