import { CircularProgress } from '@mui/material'
import React from 'react'

export const LoaderMoreItems = () => {
  return (
    <div className='flex items-center gap-2 w-full justify-center'>
      <CircularProgress />
      <p className='font-bold text-2xl'>Cargando más pokemons...</p>
    </div>
  )
}
