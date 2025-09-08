"use client";
import { useState } from "react";
import { TextField, Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{ numero?: string; password?: string }>({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const validate = () => {
    const e: { numero?: string; password?: string } = {};
    if (!numeroDocumento.trim()) e.numero = "Ingresa tu número de documento";
    if (!password.trim()) e.password = "Ingresa tu contraseña";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) {
      setOpenSnackbar(true);
      return;
    }
    router.push("/engorde");
  };

  return (
    <>
      <header className="max-w-5xl m-auto mt-10 flex justify-between">
        <h5 className="text-3xl text-center text-[#395B64]">PorciGest</h5>
      </header>

      <main>
        <div className="bg-[#A5C9CA] text-center max-w-5xl m-auto p-4 rounded">
          <h2 className="mb-2">Hello!</h2>
          <h2>Inicia Sesión en PorciGest</h2>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="max-w-md m-auto mt-10">
          <div className="flex flex-col">
            <label>Número documento</label>
            <TextField
              variant="outlined"
              placeholder="Ingrese su número"
              value={numeroDocumento}
              onChange={(e) => {
                setNumeroDocumento(e.target.value);
                if (errors.numero) setErrors((prev) => ({ ...prev, numero: undefined }));
              }}
              error={!!errors.numero}
              helperText={errors.numero}
            />
          </div>

          <div className="flex flex-col mt-8">
            <label>Contraseña</label>
            <TextField
              type="password"
              variant="outlined"
              placeholder="********"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              error={!!errors.password}
              helperText={errors.password}
            />
          </div>

          <div className="px-13 mt-4 flex justify-between">
            <a className="text-sm/6">Crear una cuenta</a>
            <button onClick={()=> router.push("/Registro")}
              type="button"
              className="bg-[#99DECB] text-black font-medium h-8 min-w-[80px] rounded-md shadow-md hover:bg-[#77cbb9] transition"
            >
              Crear
            </button>
          </div>

          <div className="m-auto px-28 mt-8">
            <button
              type="button"
              onClick={handleLogin}
              className="bg-[#77cbb9] text-black font-semibold h-10 min-w-[220px] rounded-md shadow-lg hover:bg-[#99DECB] transition text-center"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </main>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2500}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: "100%" }}>
          Por favor completa todos los campos
        </Alert>
      </Snackbar>
    </>
  );
}
