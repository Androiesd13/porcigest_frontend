"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {SportsEsportsRounded} from '@mui/icons-material';
import SavingsIcon from '@mui/icons-material/Savings';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MaleIcon from '@mui/icons-material/Male';
import ScaleIcon from '@mui/icons-material/Scale';
import StrollerIcon from '@mui/icons-material/Stroller';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TextField, Snackbar, Alert } from '@mui/material';

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
  lote: string,
  cantidad: number,
  edad: number,
  peso: number,
  consumo: number,
  progreso: number,
) {
  return { lote, cantidad, edad, peso, consumo, progreso };
}

const initialRows = [
  createData('Lote A', 159, 60, 24, 4.0, 78),
  createData('Lote B', 120, 45, 20, 3.5, 65),
];

export default function EngordePage() {
  const router = useRouter();
  const [rows, setRows] = React.useState(initialRows);

  const [showForm, setShowForm] = React.useState(false);

  const [lote, setLote] = React.useState("");
  const [cantidad, setCantidad] = React.useState("");
  const [edad, setEdad] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [consumo, setConsumo] = React.useState("");

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleDelete = (lote: string) => {
    setRows(rows.filter((row) => row.lote !== lote));
  };

  const handleAdd = () => {
    if (!lote || !cantidad) {
      setOpenSnackbar(true);
      return;
    }

    const newRow = createData(
      lote,
      Number(cantidad),
      Number(edad),
      Number(peso),
      Number(consumo),
      0
    );

    setRows([...rows, newRow]);
    setShowForm(false);
    setLote("");
    setCantidad("");
    setEdad("");
    setPeso("");
    setConsumo("");
  };

  return (
    <>
      <header className="max-w-5xl m-auto mt-10 flex justify-between">
        <h5 className="text-3xl text-center text-[#395B64]">PorciGest</h5>
        <h4>Usuario</h4>
      </header>

      <main>
        <div className="bg-[#A5C9CA] text-center max-w-5xl m-auto flex justify-between p-4">
          <Button onClick={() => router.push("/dashboard")} className="flex flex-col items-center">
            <SportsEsportsIcon className="mb-1 text-black" />
            <span className="text-black">Dashbord</span>
          </Button>
          <Button onClick={() => router.push("/reproductoras")} className="flex flex-col items-center">
            <SavingsIcon className="mb-1 text-black" />
            <span className="text-black">Reproductoras</span>
          </Button>
          <Button onClick={() => router.push("/sementales")} className="flex flex-col items-center">
            <MaleIcon className="mb-1 text-black" />
            <span className="text-black">Sementales</span>
          </Button>
          <Button className="flex flex-col items-center">
            <StrollerIcon className="mb-1 text-black" />
            <Link href="/lechones">Lechones</Link>
          </Button>
          <Button onClick={() => router.push("/engorde")} className="flex flex-col items-center">
            <ScaleIcon className="mb-1 text-black" />
            <span className="text-black">Engorde</span>
          </Button>
          <Button onClick={() => router.push("/veterinaria")} className="flex flex-col items-center">
            <MedicalServicesIcon className="mb-1 text-black" />
            <span className="text-black">Veterinaria</span>
          </Button>
        </div>

        <div className="max-w-5xl m-auto mt-8 px-5">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-5">Gestión de cerdos de engorde</h1>
            <Button
              onClick={() => setShowForm(!showForm)}
              className="bg-[#A5C9CA] h-10 min-w-[205px] rounded-md text-center ring"
            >
              <AddIcon className="mb-1 text-black" />
              <small className="text-black">Nuevo Lote</small>
            </Button>
          </div>

          {showForm && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 mt-5">
              <h2 className="text-xl font-semibold mb-4">Registrar nuevo lote</h2>
              <div className="grid grid-cols-2 gap-4">
                <TextField label="Nombre del lote" value={lote} onChange={(e) => setLote(e.target.value)} fullWidth />
                <TextField label="Cantidad" type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} fullWidth />
                <TextField label="Edad (días)" type="number" value={edad} onChange={(e) => setEdad(e.target.value)} fullWidth />
                <TextField label="Peso Prom." type="number" value={peso} onChange={(e) => setPeso(e.target.value)} fullWidth />
                <TextField label="Consumo/día" type="number" value={consumo} onChange={(e) => setConsumo(e.target.value)} fullWidth />
              </div>
              <div className="flex justify-end mt-4 gap-3">
                <Button className="bg-green-500 hover:bg-green-600 text-black" onClick={() => setShowForm(false)}>Cancelar</Button>
                <Button variant="contained" onClick={handleAdd}>Guardar</Button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-xl/20 inset-shadow-sm p-6 mb-8">
            <h1>Lotes en engorde</h1>
            <TableContainer className="mt-3" component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Lote</StyledTableCell>
                    <StyledTableCell align="right">Cantidad</StyledTableCell>
                    <StyledTableCell align="right">Edad(días)</StyledTableCell>
                    <StyledTableCell align="right">Peso Prom.</StyledTableCell>
                    <StyledTableCell align="right">Consumo/día</StyledTableCell>
                    <StyledTableCell align="right">Progreso</StyledTableCell>
                    <StyledTableCell align="right">Acciones</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.lote}>
                      <StyledTableCell component="th" scope="row">{row.lote}</StyledTableCell>
                      <StyledTableCell align="right">{row.cantidad}</StyledTableCell>
                      <StyledTableCell align="right">{row.edad}</StyledTableCell>
                      <StyledTableCell align="right">{row.peso}</StyledTableCell>
                      <StyledTableCell align="right">{row.consumo}</StyledTableCell>
                      <StyledTableCell align="right">{row.progreso}</StyledTableCell>
                      <StyledTableCell align="right">
                        <IconButton aria-label="editar" size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(row.lote)} aria-label="delete" size="small">
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

      {/* Snackbar */}
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
