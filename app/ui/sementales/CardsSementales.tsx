import { Card, CardContent, Typography } from "@mui/material";
import theme from "@/theme/theme";

const { main, contrastText } = theme.palette.secondary;

const CardsSementales = () => {
  return (
    <section id="cards-sementales" className="grid grid-cols-3 gap-2 mt-4">
      <Card sx={{ minWidth: 200, backgroundColor: main, color: contrastText }}>
        <CardContent>
          <h3 className="text-xs uppercase font-bold">Sementales Activos</h3>
          <span className="text-2xl font-semibold">12</span>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200, backgroundColor: main, color: contrastText }}>
        <CardContent>
          <h3 className="text-xs uppercase font-bold">Tasa de fertilidad</h3>
          <span className="text-2xl font-semibold">88%</span>
        </CardContent>
      </Card>   
      <Card sx={{ minWidth: 200, backgroundColor: main, color: contrastText }}>
        <CardContent>
          <h3 className="text-xs uppercase font-bold">Cruces este mes</h3>
          <span className="text-2xl font-semibold">47</span>
        </CardContent>
      </Card>
    </section>
  );
};

export default CardsSementales;
