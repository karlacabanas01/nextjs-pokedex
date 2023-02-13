import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

//Aqui lo puedo exportar de una por que solo será esta funcion
export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`); //Info del pokemon
  //optimizacion
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }

}