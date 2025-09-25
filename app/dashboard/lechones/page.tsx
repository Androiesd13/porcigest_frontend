"use client";

import { Alert, Button, Chip, Snackbar, TextField } from "@mui/material";

import { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import HeaderGestion from "@/ui/utils/HeaderGestion";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.secondary.main,
    fontWeight: "Bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontWeigth: "bold",
    fontSize: 14,
  },
}));


function createData(
  Idcamada: string,
  FechaNac: Date,
  Madre: number,
  Padre: number,
  lechones: number,
  peso: number,
  mortalidad: number,
  estados: string
) {
  return {
    Idcamada,
    FechaNac,
    Madre,
    Padre,
    lechones,
    peso,
    mortalidad,
    estados,
  };
}

const calcularEstado = (peso: number, mortalidad: number) => {
  if (mortalidad > 50) return "Crítico";
  if (peso >= 70) return "Completado";
  return "Activo";
};
const initialRows = [
  createData("Frozen yoghurt", new Date(), 6.0, 3, 24, 4.0, 78, "Activo"),
];

export default function lechones() {
  const [rows, setRows] = React.useState(initialRows);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [editIndex, setEditIndex] = React.useState<number | null>(null);

  const handleClick = function () {
    setShowForm(!showForm);
  };

  const [Idcamada, setIdCamada] = React.useState("");
  const [fechaNacimiento, setFechaNacimiento] = React.useState("");
  const [madreID, setMadreID] = React.useState("");
  const [padreId, setPadreId] = React.useState("");
  const [numeroLechones, setNumeroLechones] = React.useState("");
  const [pesoProm, setPesoProm] = React.useState("");
  const [mortalidad, setMortalidad] = React.useState("");

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleDelete = (Idcamada: string) => {
    setRows(rows.filter((row) => row.Idcamada !== Idcamada));
  };

  const handleEdit = (index: number) => {
    const row = rows[index];
    setIdCamada(row.Idcamada);
    setFechaNacimiento(row.FechaNac.toISOString().split("T")[0]);
    setMadreID(String(row.Madre));
    setPadreId(String(row.Padre));
    setNumeroLechones(String(row.lechones));
    setPesoProm(String(row.peso));
    setMortalidad(String(row.mortalidad));
    setEditIndex(index);
    setShowForm(true);
  };

  const handleAdd = () => {
    if (!Idcamada || !fechaNacimiento) {
      setOpenSnackbar(true);
      return;
    }

    const pesoNum = Number(pesoProm);
    const mortNum = Number(mortalidad);

    const newRow = createData(
      Idcamada,
      new Date(fechaNacimiento),
      Number(madreID),
      Number(padreId),
      Number(numeroLechones),
      pesoNum,
      mortNum,
      calcularEstado(pesoNum, mortNum)
    );

    if (editIndex !== null) {
      const updatedRows = [...rows];
      updatedRows[editIndex] = newRow;
      setRows(updatedRows);
    } else {
      setRows([...rows, newRow]);
    }

    setShowForm(false);
    setEditIndex(null);
    setFechaNacimiento("");
    setIdCamada("");
    setMadreID("");
    setPadreId("");
    setNumeroLechones("");
    setPesoProm("");
    setMortalidad("");
  };

  return (
    <>
      <main>
        <HeaderGestion
          title="Control de lechones"
          textButton="Registrar camada"
          setShowForm={handleClick}
        />

        {showForm && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 mt-5 text-center">
            <h2 className="text-xl font-semibold mb-4">Nueva Camada</h2>
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="ID Camada"
                type="number"
                value={Idcamada}
                onChange={(e) => setIdCamada(e.target.value)}
                fullWidth
              />
              <TextField
                label="Madre Id"
                type="number"
                value={madreID}
                onChange={(e) => setMadreID(e.target.value)}
                fullWidth
              />
              <TextField
                label="Padre ID"
                type="number"
                value={padreId}
                onChange={(e) => setPadreId(e.target.value)}
                fullWidth
              />
              <TextField
                label="Fecha Nacimiento"
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Número de lechones"
                type="number"
                value={numeroLechones}
                onChange={(e) => setNumeroLechones(e.target.value)}
                fullWidth
              />
              <TextField
                label="Peso Prom"
                type="number"
                value={pesoProm}
                onChange={(e) => setPesoProm(e.target.value)}
                fullWidth
              />
              <TextField
                label="Mortalidad"
                type="number"
                value={mortalidad}
                onChange={(e) => setMortalidad(e.target.value)}
                fullWidth
              />
            </div>
            <div className="flex justify-end mt-4 gap-3">
              <Button
                color="secondary"
                onClick={() => setShowForm(false)}
                sx={{
                  color: "#171717",
                  "&:hover": {
                    backgroundColor: "#D3B8A1",
                  },
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                onClick={handleAdd}
                sx={{
                  "&:hover": {
                    backgroundColor: "#D3B8A1",
                  },
                }}
              >
                Guardar
              </Button>
            </div>
          </div>
        )}
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
          <TableContainer className="mt-3">
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
                {rows.map((row, index) => (
                  <TableRow key={row.Idcamada}>
                    <StyledTableCell component="th" scope="row">
                      {row.Idcamada}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.FechaNac.toLocaleDateString()}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.Madre}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.lechones}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.peso}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.mortalidad}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.estados === "Completado" && (
                        <Chip label="Completado" color="success" size="small" />
                      )}
                      {row.estados === "Activo" && (
                        <Chip label="Activo" color="primary" size="small" />
                      )}
                      {row.estados === "Crítico" && (
                        <Chip label="Crítico" color="error" size="small" />
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton
                        onClick={() => handleEdit(index)}
                        aria-label="editar"
                        size="small"
                        color="info"
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(row.Idcamada)}
                        aria-label="delete"
                        size="small"
                        color="error"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2500}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Debes completar todos los campos
        </Alert>
      </Snackbar>
    </>
  );
}
