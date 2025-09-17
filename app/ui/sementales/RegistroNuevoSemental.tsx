import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers";

const RegistroNuevoSemental = ({
  setShowForm,
}: {
  setShowForm: (value: boolean) => void;
}) => {
  // Estados para capturar los valores de los inputs

  return (
    <section
      id="form-semental"
      className="py-6 px-4 rounded-sm shadow-lg gap-2 flex flex-col"
    >
      <h2 id="title">Registro nuevo semental</h2>
      <form action="" className="flex flex-col gap-2">
        <div id="fields" className="flex justify-between">
          <TextField label="Codigo/ID" />
          <TextField label="Nombre" />
          <TextField label="Raza" />
          <DatePicker label="Fecha de nacimiento" />
        </div>
        <div id="actions" className="mt-3">
          <Button variant="contained">Guardar</Button>
          <Button onClick={() => setShowForm(false)}>Cancelar</Button>
        </div>
      </form>
    </section>
  );
};

export default RegistroNuevoSemental;
