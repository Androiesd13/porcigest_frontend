import { Dayjs } from "dayjs"

export type FormData = {
  codigo: string,
  fechaNacimiento: Dayjs | null
  raza: string,
  estado: string
}

export interface RegistroCerda{
    codigo: string,
    edad: number,
    raza: string
    estado: string
}

export interface RegistroVacuna{
  fecha: Dayjs | null,
  tipo: string,
  animal: string
  producto: string
  veterinario: string
  estado: string
}

export interface RegistroSemental{
  codigo: string,
  nombre: string
  edad: number
  raza: string
}