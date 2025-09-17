"use client"

import HeaderGestion from "@/ui/utils/HeaderGestion";
import RegistroNuevoSemental from "@/ui/sementales/RegistroNuevoSemental";

import { useState } from "react";
import CardsSementales from "@/ui/sementales/CardsSementales";

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
      <RegistroNuevoSemental/>
      <CardsSementales/>
    </>
  );
}
