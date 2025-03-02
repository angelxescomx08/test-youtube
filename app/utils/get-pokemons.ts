import { PokemonResponse } from "../interfaces/pokemon";

export async function getPokemons({ offset }:{offset: string}){
  const url = `https://pokeapi.co/api/v2/pokemon?limit=4&offset=${offset}`
  const response = await fetch(url)
  const data: PokemonResponse = await response.json()
  return data;
}

export function getPokemonUrl(url: string){
  const pokemonId = url.split("/").filter(Boolean).pop()
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
}