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
  nombre: string,
  raza: string,
  edad: number
) {
  return { codigo, nombre, raza, edad };
}

const rows = [
  createData("SM-001", "Thor", "cualquiera",3),
  createData("SM-002", "Zeus", "cualquiera", 4),
];

const columns = [
  { key: "id", label: "ID" },
  { key: "nombre", label: "Nombre" },
  { key: "raza", label: "Raza" },
  { key: "edad", label: "Edad" },
  { key: "cruces", label: "N° Cruces" },
  { key: "taza_fertilidad", label: "Taza Fertilidad" },
  { key: "ultimo_cruce", label: "Último Cruce" },
  { key:"acciones", label: "Acciones"}
];

const TableSementales = () => {
  return (
    <section className="shadow-lg mt-3 py-3 px-4 rounded-sm">
      <h3 className="text-bold">Registro de sementales</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col) => <StyledTableCell align="left">{col.label}</StyledTableCell>)}
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
              <TableCell align="left">{row.nombre}</TableCell>
              <TableCell align="left">{row.raza}</TableCell>
              <TableCell align="left">
                <Chip label={row.edad} />
              </TableCell>
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
};

export default TableSementales;
