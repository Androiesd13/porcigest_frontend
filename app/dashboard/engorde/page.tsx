export default function Engorde(){
    return(
    <>
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
    </>
    )
}