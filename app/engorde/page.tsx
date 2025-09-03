import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SavingsIcon from '@mui/icons-material/Savings';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';



export default function engorde(){
    return(
    <>
     <header className="max-w-5xl m-auto mt-10 flex justify-between">
        <h5 className="text-3xl text-center text-[#395B64]">PorciGest</h5>
        <h4>Usuario</h4>
    </header>

    <main>
    <div className="bg-[#A5C9CA] text-center max-w-5xl m-auto flex justify-between p-4">
        <button className="flex flex-col items-center"><SportsEsportsIcon className="mb-1"/>
        <span>Dashbord</span>
        </button>

        <button className="flex flex-col items-center"><SavingsIcon/>
            <span>Reproductoras</span>
        </button>

        <button className="flex flex-col items-center">
            <span>Sementales</span>
        </button>

        <button className="flex flex-col items-center">
            <span>Lechones</span>
        </button>

        <button className="flex flex-col items-center">
            <span>Engorde</span>
        </button>

        <button className="flex flex-col items-center"><MedicalServicesIcon/>
            <span>Veterinaria</span>
        </button>
    </div>

    <div className="max-w-5xl m-auto mt-8 px-5">
          <h1 className="text-2xl font-bold mb-5">Gestión de cerdos de engorde</h1>

          {/* TARJETAS */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-[#A5C9CA] rounded-xl p-4 text-center shadow">
              <h2 className="text-xl font-bold">324</h2>
              <p>Cerdos en engorde</p>
              <small>85% ocupación</small>
            </div>

            <div className="bg-[#A5C9CA] rounded-xl p-4 text-center shadow">
              <h2 className="text-xl font-bold">0.75 KG</h2>
              <p>Ganancia diaria</p>
              <small>En objetivo</small>
            </div>

            <div className="bg-[#A5C9CA] rounded-xl p-4 text-center shadow">
              <h2 className="text-xl font-bold">2.8:1</h2>
              <p>Conversión alimenticia</p>
              <small>Óptimo</small>
            </div>

            <div className="bg-[#A5C9CA] rounded-xl p-4 text-center shadow">
              <h2 className="text-xl font-bold">42</h2>
              <p>Listos para venta</p>
              <small>Esta semana</small>
            </div>
          </div>

          {/* GRÁFICO (placeholder) */}
          <div className="bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="font-semibold mb-4">Evolución del peso por lote</h2>
            <div className="h-40 flex items-center justify-center text-gray-400">
              grafica
            </div>
          </div>

        </div>
      </main>
    </>
    )
}