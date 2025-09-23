"use client"

import HeaderGestion from "@/ui/utils/HeaderGestion";
import RegistroNuevoSemental from "@/ui/sementales/RegistroNuevoSemental";

import { useState } from "react";
import CardsSementales from "@/ui/sementales/CardsSementales";
import TableSementales from '../../ui/sementales/TableSementales';

export default function Sementales() {
  const [openForm, setOpenForm] = useState(false);
  const handleClick = () => {
    setOpenForm(!openForm);
  };
  return (
    <>
      <HeaderGestion
        title="Gestion de sementales"
        textButton="Nuevo Semental"
        setShowForm={handleClick}
      />
      {openForm && <RegistroNuevoSemental setShowForm={setOpenForm}/>}
      <CardsSementales/>
      <TableSementales/>
    </>
  );
}
