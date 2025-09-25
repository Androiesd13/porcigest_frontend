import { Card, CardContent } from "@mui/material";
import theme from "@/theme/theme";

const { main, contrastText } = theme.palette.secondary;

type CardProps = {
  title: string;
  data: string;
};

const CardComponent = ({ title, data }: CardProps) => {
  return (
    <Card sx={{ minWidth: 200, backgroundColor: main, color: contrastText }}>
      <CardContent>
        <h3 className="text-xs uppercase font-bold">{title}</h3>
        <span className="text-2xl font-semibold">{data}</span>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
