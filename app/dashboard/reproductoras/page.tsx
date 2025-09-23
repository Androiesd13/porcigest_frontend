"use client";

import { useState } from "react";

import RegistroNuevaCerda from "@/ui/reproductoras/RegistroNuevaCerda";
import TableCerdas from "@/ui/reproductoras/TableCerdas";
import Grafico from "@/ui/dashboard/Grafico";
import HeaderGestion from "@/ui/utils/HeaderGestion";

import { type FormData, RegistroCerda } from "../../../lib/definitions";

// StateFull Component

export default function Reproductoras() {
  const [openForm, setOpenForm] = useState(false);
  const handleClick = () => {
    setOpenForm(!openForm);
  };
  // Estado que almacena la data de los input
  const [registros, setRegistros] = useState<RegistroCerda[]>([]);

  const addRow = (data: RegistroCerda) => {
    setRegistros((prev) => [...prev, { ...data }]);
  };

  return (
    <>
      <HeaderGestion
        title="Gestion de cerdas reproductoras"
        textButton="Nueva Cerda"
        setShowForm={handleClick}
      />
      {openForm && (
        <RegistroNuevaCerda setShowForm={setOpenForm} onAdd={addRow} />
      )}
      <TableCerdas data={registros} />
      <Grafico title="Ciclo de gestación - seguimiento" />
    </>
  );
}
