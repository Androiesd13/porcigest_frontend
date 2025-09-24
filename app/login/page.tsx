"use client";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  FormLabel,
  Alert,
} from "@mui/material";
import { useState } from "react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import theme from "@/theme/theme";
import Link from "next/link";

const { main } = theme.palette.secondary;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorDocument, setErrorDocument] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setErrorDocument(false);
    setErrorPassword(false);

    e.preventDefault();

    // si los dos esta vacíos
    if (!password && !documento) {
      setErrorDocument(true);
      setErrorPassword(true);
      setMessage("todos los campos son requeridos");
      return;
    }
    // si uno de los dos esta vacío
    if (!password) {
      setErrorPassword(true);
      setMessage("campo contraseña obligatorio");
      return;
    } else if (!documento) {
      setErrorDocument(true);
      setMessage("campo documento obligatorio");
      return;
    } else {
      setErrorPassword(false);
      setMessage("");
      setErrorDocument(false);
    }

    const regexDoc = /^\d{10}$/;
    if (!regexDoc.test(documento)) {
      setMessage("Numero de documento inválido, debe tener 10 dígitos");
      setErrorDocument(true);
      return;
    } else {
      setErrorDocument(false);
      setMessage("");
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-full ">
      <main className="min-w-lg m-auto mt-20 py-10 px-4 bg-stone-100 rounded-md shadow-lg">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-4xl text-[#99775C]">Hello Welcome!</h2>
          <h2 >Inicia Sesion en PorciGest</h2>
        </div>

        <form
          className="max-w-md m-auto mt-12 mb-4 flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1 mb-6">
            <FormLabel sx={{ fontWeight: 600, color:"#black" }}>
              Numero de documento
            </FormLabel>
            <TextField
              error={errorDocument}
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={documento}
              onChange={(e) => {
                setDocumento(e.target.value);
              }}
              sx={{
                letterSpacing: "2.5px",
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <FormLabel sx={{ fontWeight: 600, color: "#black" }}>
              Contraseña
            </FormLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              error={errorPassword}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="mt-4 flex justify-between">
            <a className="text-sm/6">No tienes una cuenta?</a>
            <Button variant="contained" color="secondary" 
            sx={{
                '&:hover': {
                  backgroundColor: '#D3B8A1',
                },
              }}>
              <Link href="/registro"> Crear <AddCircleIcon/></Link>
            </Button>
          </div>
          <div className="m-auto mt-6">
            <Button variant="contained" color="secondary" type="submit"
            sx={{
                '&:hover': {
                  backgroundColor: '#D3B8A1',
                },
              }}>
              <Link href="/dashboard"
              > Iniciar Sesion </Link>
            </Button>
          </div>
        </form>
        {errorPassword || errorDocument ? (
          <Alert severity="error">{message}</Alert>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}