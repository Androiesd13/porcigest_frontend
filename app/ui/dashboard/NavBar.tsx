import {
  SportsEsportsRounded,
  SavingsRounded,
  MaleRounded,
  ScaleRounded,
  MedicalServicesRounded,
  StrollerRounded,
} from "@mui/icons-material";

import ItemNav from "../utils/ItemNav";

interface Props {
  itemSelected: number;
}

export default function NavBar() {
  return (
    <nav className={`max-w-4xl mx-auto p-3 bg-secondary rounded-sm`}>
      <ul className="flex items-center justify-around">
        <ItemNav
          label="Dashboard"
          path="/dashboard"
          icon={<SportsEsportsRounded />}
        />

        <ItemNav
          label="Reproductoras"
          path="/dashboard/reproductoras"
          icon={<SavingsRounded />}
        />

        <ItemNav
          label="Sementales"
          path="/dashboard/sementales"
          icon={<MaleRounded />}
        />

        <ItemNav
          label="Lechones"
          path="/dashboard/lechones"
          icon={<StrollerRounded />}
        />

        <ItemNav
          label="Engorde"
          path="/dashboard/engorde"
          icon={<ScaleRounded />}
        />

        <ItemNav
          label="Veterinaria"
          path="/dashboard/veterinaria"
          icon={<MedicalServicesRounded />}
        />
      </ul>
    </nav>
  );
}
