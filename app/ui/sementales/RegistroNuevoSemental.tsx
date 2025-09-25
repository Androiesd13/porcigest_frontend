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
      <form action="">
        <div id="fields" className="flex flex-col gap-2 md:flex-row flex-wrap items-stretch">
          <TextField label="Codigo/ID" sx={{minWidth: "220px", flex: 1}}/>
          <TextField label="Nombre"  sx={{minWidth: "220px", flex: 1}}/>
          <TextField label="Raza"  sx={{minWidth: "220px", flex: 1}}/>
          <DatePicker label="Fecha de nacimiento"  sx={{minWidth: "220px", flex:1}}/>
        </div>
        <div id="actions" className="flex mt-3 gap-3">
          <Button variant="contained"  
                sx={{ alignSelf: "start", '&:hover': {
                  backgroundColor: '#D3B8A1',
                },}}>
              Guardar
          </Button>

          <Button onClick={() => setShowForm(false)} 
                sx={{ color: "#171717",'&:hover': {
                  backgroundColor: '#D3B8A1',
                },}}>
              Cancelar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default RegistroNuevoSemental;
