"use client";

import { useState } from "react";

import RegistroNuevaCerda from "@/ui/reproductoras/RegistroNuevaCerda";
import TableCerdas from "@/ui/reproductoras/TableCerdas";
import Grafico from "@/ui/dashboard/Grafico";
import HeaderGestion from "@/ui/utils/HeaderGestion";

export default function Reproductoras() {
  const [openForm, setOpenForm] = useState(false);
  const handleClick = () => {
    setOpenForm(!openForm);
  };
  return (
    <>
      <HeaderGestion title="Gestion de cerdas reproductoras" textButton="Nueva Cerda" setShowForm={handleClick}/>
      {openForm && <RegistroNuevaCerda setShowForm={setOpenForm}/>}
      <TableCerdas/>
      <Grafico title="Ciclo de gestación - seguimiento"/>
    </>
  );
}
