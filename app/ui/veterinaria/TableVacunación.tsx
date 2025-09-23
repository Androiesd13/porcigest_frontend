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

const columns = [
  { key: "fecha", label: "Fecha" },
  { key: "tipo", label: "Tipo" },
  { key: "animal/lote", label: "Animal/Lote" },
  { key: "producto", label: "Producto" },
  { key: "veterinario", label: "Veterinario" },
  { key: "estado", label: "Estado" },
  { key: "acciones", label: "Acciones" },
];

const TableVacunacion = () => {
  return (
    <section
      className="shadow-lg mt-3 py-6 px-4 rounded-sm"
      id="table-vacunación"
    >
      <h1 className="text-bold">Historial de intervenciones veterinarias</h1>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <StyledTableCell align="left" key={col.key}>{col.label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </section>
  );
};

export default TableVacunacion;
