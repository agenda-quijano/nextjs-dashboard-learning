// Importa tus fuentes desde el paquete "next/google-fonts"
import { Montserrat, Lusitana } from "next/font/google";

// Define tus fuentes asignando el nombre de la fuente a la propiedad fontFamily
export const monserrat = Montserrat({
  subsets: ['latin'],
});

export const lusitana = Lusitana({
 
  subsets: ['latin'],
  weight: ['400', '700']
});