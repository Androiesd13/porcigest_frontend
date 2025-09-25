
import GraficoPoblacion from "../ui/dashboard/GraficoPoblacion";
import Grafico from "@/ui/dashboard/Grafico";
import CardComponent from "@/ui/dashboard/CardComponent";
import ButtonNav from "@/ui/dashboard/ButtonNav";

import {
  AddRounded,
  VaccinesRounded,
  AutorenewRounded,
  FitnessCenterRounded,
} from "@mui/icons-material";

export default function Dashboard() {
  return (
    <>
      <h1 className="mt-4 text-2xl font-bold">Panel de control general</h1>
      <section
        id="cards"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4"
      >
        <CardComponent title="Total animales" data={"456"} />
        <CardComponent title="Cerdas gestantes" data={"124"} />
        <CardComponent title="Tasa de natalidad" data={"92%"} />
        <CardComponent title="Prox. Vacunaciones" data="28" />
      </section>
      <section
        id="actions"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-2 mt-4"
      >
        <ButtonNav
          path="/dashboard/lechones"
          text="Registrar Parto"
          icon={<AddRounded />}
        />
        <ButtonNav
          path="/dashboard/veterinaria"
          text="Nueva Vacunación"
          icon={<VaccinesRounded />}
        />
        <ButtonNav
          path="/dashboard/lechones"
          text="Registrar Cruce"
          icon={<AutorenewRounded />}
        />
        <ButtonNav
          path="/dashboard/engorde"
          text="Control de peso"
          icon={<FitnessCenterRounded />}
        />
      </section>
      <GraficoPoblacion />
      <aside className="flex flex-col md:flex-row gap-2 max-w-5xl">
        <Grafico title="Distribución por categoría" />
        <Grafico title="Rendimiento de engorde" />
      </aside>
    </>
  );
}
