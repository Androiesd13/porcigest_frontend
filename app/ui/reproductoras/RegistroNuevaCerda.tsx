import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export default function ({setShowForm}: {setShowForm : (value: boolean)=> void}) {
  return (
    <form
      action=""
      className={`py-6 px-4 rounded-sm shadow-lg gap-2 flex flex-col`}
    >
      <h2 className="text-md font-bold">Registro nueva cerda</h2>
      <section className="flex justify-between">
        <TextField label="Codigo" placeholder="Ej: CRD-2024-001" />
        <DatePicker label="Fecha de nacimiento"/>
        <FormControl sx={{ minWidth: "200px" }}>
          <InputLabel id="raza">Raza</InputLabel>
          <Select label="Raza" labelId="raza">
            <MenuItem value={"yorkshire"}>Yorkshire</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: "200px" }}>
          <InputLabel id="estado">Estado</InputLabel>
          <Select label="Estado" labelId="estado">
            <MenuItem value={"vacia"}>Vacia</MenuItem>
          </Select>
        </FormControl>
      </section>
      <div id="actions" className="flex gap-1 mt-5">
        <Button
          variant="contained"
          sx={{ alignSelf: "start"}}
        >
          Guardar
        </Button>
        <Button sx={{color: "#395b64"}} onClick={()=> setShowForm(false)}>Cancelar</Button>
      </div>
    </form>
  );
}
