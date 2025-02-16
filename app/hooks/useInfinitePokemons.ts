import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getPokemons } from '../utils/get-pokemons'

export const useInfinitePokemons = () => {

  const pokemons = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: async (data)=>{
      const { pageParam } = data;
      const response = await getPokemons({offset: pageParam})
      return response
    },
    initialPageParam: "0",
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next 
        ? new URL(lastPage.next).searchParams.get("offset")
        : null
    },
  })

  return {
    pokemons
  }
}
