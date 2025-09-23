"use client";

import { Button, TextField, Snackbar, Alert, Chip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  Idcamda: string,
  FechaNac: Date,
  Madre: number,
  Padre: number,
  lechones: number,
  peso: number,
  mortalidad: number,
  estados: string,
) {
  return { Idcamda, FechaNac, Madre, Padre, lechones, peso, mortalidad, estados };
}

const calcularEstado = (peso: number, mortalidad: number) => {
  if (mortalidad > 50) return "Crítico";
  if (peso >= 70) return "Completado";
  return "Activo";
};

const initialRows = [
  createData("new camada", new Date('2005-02-03'), 6.0, 24, 4.0, 78, 67, "Completado"),
];

export default function Lechones() {
  const [rows, setRows] = React.useState(initialRows);

  const [editIndex, setEditIndex] = React.useState<number | null>(null);
  const [showForm, setShowForm] = React.useState(false);

  const [Idcamada, setIdCamada] = React.useState("");
  const [fechaNacimiento, setFechaNacimiento] = React.useState("");
  const [madreID, setMadreID] = React.useState("");
  const [padreId, setPadreId] = React.useState("");
  const [numeroLechones, setNumeroLechones] = React.useState("");
  const [pesoProm, setPesoProm] = React.useState("");
  const [mortalidad, setMortalidad] = React.useState("");

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleDelete = (Idcamada: string) => {
    setRows(rows.filter((row) => row.Idcamda !== Idcamada));
  };

  const handleEdit = (index: number) => {
    const row = rows[index];
    setIdCamada(row.Idcamda);
    setFechaNacimiento(row.FechaNac.toISOString().split('T')[0]);
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
        <div className="max-w-5xl m-auto mt-8 px-5">
          <div className='flex justify-between'>
            <h1 className="text-2xl font-bold mb-5">Control de Lechones</h1>
            <Button
              onClick={() => setShowForm(!showForm)}
              className='bg-[#A5C9CA] h-10 min-w-[205px] rounded-md text-center ring '
            >
              <AddIcon className="mb-1 text-black" />
              <small className='text-black'>Registrar Camada</small>
            </Button>
          </div>

          {showForm && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 mt-5 text-center">
              <h2 className="text-xl font-semibold mb-4">Nueva Camada</h2>
              <div className="grid grid-cols-2 gap-4">
                <TextField label="ID Camada" type="number" value={Idcamada} onChange={(e) => setIdCamada(e.target.value)} fullWidth />
                <TextField label="Madre Id" type="number" value={madreID} onChange={(e) => setMadreID(e.target.value)} fullWidth />
                <TextField label="Padre ID" type="number" value={padreId} onChange={(e) => setPadreId(e.target.value)} fullWidth />
                <TextField label="Fecha Nacimiento" type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} fullWidth InputLabelProps={{shrink: true,}}/>
                <TextField label="Número de lechones" type="number" value={numeroLechones} onChange={(e) => setNumeroLechones(e.target.value)} fullWidth />
                <TextField label="Peso Prom" type="number" value={pesoProm} onChange={(e) => setPesoProm(e.target.value)} fullWidth />
                <TextField label="Mortalidad" type="number" value={mortalidad} onChange={(e) => setMortalidad(e.target.value)} fullWidth />
              </div>
              <div className="flex justify-end mt-4 gap-3">
                <Button onClick={() => setShowForm(false)}>Cancelar</Button>
                <Button variant="contained" onClick={handleAdd}>Guardar</Button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-xl/20 inset-shadow-sm p-6 mb-8">
            <h2 className="font-semibold mb-4">Curva de crecimiento - Lechones</h2>
            <div className="h-40 flex items-center justify-center text-gray-400">
              grafica
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl/20 inset-shadow-sm p-6 mb-8">
            <h1>Camadas Activas</h1>
            <TableContainer className="mt-3" component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Id camada</StyledTableCell>
                    <StyledTableCell align="right">Fecha Nacimiento</StyledTableCell>
                    <StyledTableCell align="right">Madre</StyledTableCell>
                    <StyledTableCell align="right">Padre</StyledTableCell>
                    <StyledTableCell align="right">N° Lechones</StyledTableCell>
                    <StyledTableCell align="right">Peso Prom.</StyledTableCell>
                    <StyledTableCell align="right">Mortalidad</StyledTableCell>
                    <StyledTableCell align="right">Estado</StyledTableCell>
                    <StyledTableCell align="right">Acciones</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <StyledTableRow key={row.Idcamda}>
                      <StyledTableCell component="th" scope="row">{row.Idcamda}</StyledTableCell>
                      <StyledTableCell align="right">{row.FechaNac.toLocaleDateString()}</StyledTableCell>
                      <StyledTableCell align="right">{row.Madre}</StyledTableCell>
                      <StyledTableCell align="right">{row.Padre}</StyledTableCell>
                      <StyledTableCell align="right">{row.lechones}</StyledTableCell>
                      <StyledTableCell align="right">{row.peso}</StyledTableCell>
                      <StyledTableCell align="right">{row.mortalidad}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.estados === "Completado" && <Chip label="Completado" color="success" size="small" />}
                        {row.estados === "Activo" && <Chip label="Activo" color="primary" size="small" />}
                        {row.estados === "Crítico" && <Chip label="Crítico" color="error" size="small" />}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <IconButton onClick={() => handleEdit(index)} aria-label="editar" size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(row.Idcamda)} aria-label="delete" size="small">
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2500}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: "100%" }}>
          Debes completar al menos el nombre del lote y la cantidad
        </Alert>
      </Snackbar>
    </>
  );
}
