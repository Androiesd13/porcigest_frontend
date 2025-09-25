"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material";

import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.secondary.main,
    fontWeight: "900",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: "900",
  },
}));


export default function Movimientos() {
  // Datos de ejemplo con el campo "pagina"
  const movimientos = [
    { id: 1, usuario: "Juan Pérez", accion: "Creó un nuevo cliente", pagina: "Clientes", fecha: "2025-09-10 09:30" },
    { id: 2, usuario: "Ana López", accion: "Editó un pedido", pagina: "Pedidos", fecha: "2025-09-10 10:15" },
    { id: 3, usuario: "Carlos Ruiz", accion: "Eliminó un producto", pagina: "Productos", fecha: "2025-09-10 11:00" },
  ];

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ m: 2 }}>
        Movimientos de Usuarios
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Usuario</StyledTableCell>
            <StyledTableCell>Acción</StyledTableCell>
            <StyledTableCell>Página</StyledTableCell>
            <StyledTableCell>Fecha</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movimientos.map((mov) => (
            <TableRow key={mov.id}>
              <StyledTableCell>{mov.id}</StyledTableCell>
              <TableCell>{mov.usuario}</TableCell>
              <TableCell>{mov.accion}</TableCell>
              <TableCell>{mov.pagina}</TableCell>
              <TableCell>{mov.fecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
