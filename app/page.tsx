"use client";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [documento, setDocumento] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>)=> {
    e.preventDefault();
    if(!documento || !password){
      setError("Los campos son obligatorios")
      return
    }
    const regexDoc = /^\d{10}$/
    if(!regexDoc.test(documento)){
      setError("Numero de documento inválido, debe tener 10 dígitos")
      return
    }
  }

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
    <>
      <main className="min-w-lg m-auto py-10 px-4 bg-stone-50 rounded-md shadow-lg">
        <div className="text-center">
          <h2 className="mb-5 text-4xl text-[#395b64]">Hello! </h2>
          <h2>Inicia Sesion en PorciGest</h2>
        </div>
        <form className="max-w-md m-auto mt-12 flex flex-col">
          <div className="flex flex-col gap-1 mb-6">
            <label> Numero documento </label>
            <TextField id="outlined-basic" variant="outlined" />
          </div>
          <div className="flex flex-col gap-1">
            <label> Contraseña </label>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
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
            <a className="text-sm/6  text-[#395b64]">No tienes una cuenta?</a>
            <Button variant="contained" color="primary">
              Crear
            </Button>
          </div>

          <div className="m-auto mt-6">
            <Button variant="contained" color="primary">
              Iniciar Sesion
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
