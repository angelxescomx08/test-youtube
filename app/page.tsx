"use client"

import { Button } from "@mui/material";
import { getPokemons, getPokemonUrl } from "./utils/get-pokemons";
import { useInfinitePokemons } from "./hooks/useInfinitePokemons";
import InfiniteScroll from "react-infinite-scroller";
import { LoaderMoreItems } from "./components/ui/LoaderMoreItems";
import PokemonCard from "./components/ui/PokemonCard";

export default function Home() {

  const { pokemons } = useInfinitePokemons()

  return (
    <main className="container m-auto">
      <InfiniteScroll
        loadMore={(page)=>{
          pokemons.fetchNextPage()
        }}
        hasMore={pokemons.hasNextPage}
        loader={<LoaderMoreItems />}
        threshold={10}
      >
        <div className="grid grid-cols-12 gap-4" key="0">
          {
            pokemons.data?.pages.map(page=>page.results).flat().map(pokemon=>(
              <PokemonCard 
                key={pokemon.url}
                name={pokemon.name}
                url={getPokemonUrl(pokemon.url)}
              />
            ))
          }
        </div>
      </InfiniteScroll>
    </main>
  );
}
