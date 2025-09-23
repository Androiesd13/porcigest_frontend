import { AddRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

interface HeaderProps{
    title: string,
    textButton: string
    setShowForm: ()=> void
}

const HeaderGestion = ({title, textButton, setShowForm} : HeaderProps) => {
  return (
    <header className="flex justify-between my-4">
      <h1 className="text-2xl">{title}</h1>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
        }}
        onClick={setShowForm}
      >
        <AddRounded />
        {textButton}
      </Button>
    </header>
  );
};

export default HeaderGestion;
