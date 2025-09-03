import { ClassNames } from "@emotion/react"
import { TextField } from "@mui/material"

export default function Home() {
  return (
    <>
     <header className="max-w-5xl m-auto mt-10 flex justify-between">
      <h5 className="text-3xl text-center text-[#395B64]">PorciGest</h5>
      <h4>Usuario</h4>
    </header>
    
  <main>

    <div className="bg-[#A5C9CA] text-center max-w-5xl m-auto">
        <h2 className="mb-8" >Hello! </h2>
        <h2> Inicia Sesion en PorciGest </h2>
    </div>

    <form className="max-w-md m-auto mt-15 ">
      <div className="flex flex-col ">
        <label> Numero documento </label>
        <TextField id="outlined-basic" variant="outlined" placeholder="Ingrese su numero"/>
      </div>
        
      <div className="flex flex-col mt-8">
         <label> Contraseña </label>
        <TextField id="outlined-basic" variant="outlined" placeholder="********"/>
      </div>
      <div className=" px-13 mt-4 flex justify-between">
        <a className="text-sm/6">Crear una cuenta</a>
        <button className="bg-[#99DECB] h-8 min-w-[80px]  rounded-md">Crear</button>
      </div>

      <div className="m-auto px-28 mt-8">
        <button className="bg-[#99DECB] h-10 min-w-[220px]  rounded-md text-center" >Iniciar Sesion</button>
      </div>   
    
    </form>

  </main>
    
  </>
   
  );
}
