"use client";
import { useRouter } from "next/navigation";

import { Button, TextField } from "@mui/material";

import {useState} from 'react'

import EditIcon from "@mui/icons-material/Edit";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import HeaderGestion from "@/ui/utils/HeaderGestion";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  Idcamda: string,
  FechaNac: number,
  Madre: number,
  lechones: number,
  peso: number,
  mortalidad: number,
  estados: number
) {
  return { Idcamda, FechaNac, Madre, lechones, peso, mortalidad, estados };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 78, 67)];

export default function lechones() {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleClick = function(){
    setShowForm(!showForm)
  }

  const router = useRouter();

  return (
    <>
      <main>
        <HeaderGestion
          title="Control de lechones"
          textButton="Registrar camada"
          setShowForm={handleClick}
        />

        <div className="max-w-5xl m-auto mt-8 px-5">
            { showForm && <form className="bg-white rounded-xl shadow-xl/20 inset-shadow-sm p-6 mb-8">
              <h2 className="font-semibold mb-4">Nueva Camada</h2>
              <section className="grid grid-cols-2 gap-6">
                <TextField
                  label="Madre (ID)"
                  placeholder="CRD-2023-045"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Padre (ID)"
                  placeholder="SEM-001 (Thor)"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Fecha de Nacimiento"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Número de lechones"
                  placeholder="Ej: 12"
                  type="number"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Peso Promedio (Kg)"
                  placeholder="Ej: 13"
                  type="number"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </section>
            </form>}
          <div className="bg-white rounded-xl shadow-xl/20 inset-shadow-sm p-6 mb-8">
            <h2 className="font-semibold mb-4">
              Curva de crecimiento - Lechones
            </h2>
            <div className="h-40 flex items-center justify-center text-gray-400">
              grafica
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl/20 inset-shadow-sm p-6 mb-8">
            <h1>Camadas Activas</h1>
            <TableContainer className="mt-3 " component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Idcamada</StyledTableCell>
                    <StyledTableCell align="right">
                      Fecha Nacimiento
                    </StyledTableCell>
                    <StyledTableCell align="right">Madre</StyledTableCell>
                    <StyledTableCell align="right">N° Lechones</StyledTableCell>
                    <StyledTableCell align="right">Peso Prom.</StyledTableCell>
                    <StyledTableCell align="right">
                      Mortalidad/dia
                    </StyledTableCell>
                    <StyledTableCell align="right">Estados</StyledTableCell>
                    <StyledTableCell align="right">Acciones</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.Idcamda}>
                      <StyledTableCell component="th" scope="row">
                        {row.Idcamda}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.FechaNac}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.Madre}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.lechones}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.peso}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.mortalidad}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.estados}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <IconButton aria-label="editar" size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" size="small">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </main>
    </>
  );
}
