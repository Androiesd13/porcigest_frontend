"use client";

import { Button } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { useState } from "react";

import RegistroNuevaCerda from "@/ui/reproductoras/RegistroNuevaCerda";
import TableCerdas from "@/ui/reproductoras/TableCerdas";
import Grafico from "@/ui/dashboard/Grafico";

export default function Reproductoras() {
  const [openForm, setOpenForm] = useState(false);
  const handleClick = () => {
    setOpenForm(!openForm);
  };
  return (
    <>
      <header className="flex justify-between mt-4">
        <h1 className="text-2xl">Gestion de cerdas reproductoras</h1>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
          }}
          onClick={handleClick}
        >
          <AddRounded />
          Nueva cerda
        </Button>
      </header>
      {openForm && <RegistroNuevaCerda/>}
      <TableCerdas/>
      <Grafico title="Ciclo de gestación - seguimiento"/>
    </>
  );
}
