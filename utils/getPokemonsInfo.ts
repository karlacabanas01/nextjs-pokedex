import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

//Aqui lo puedo exportar de una por que solo será esta funcion
export const getPokemonInfo = async (nameOrId: string) => {
  //Try-Catch agregado para la incremental Static Gneration (ISG)
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`); //Info del pokemon
    //optimizacion
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }
  } catch (error) {
    return null; //Regresa una promesa o un null
  }
  

}