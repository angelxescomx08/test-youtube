import { Button } from '@mui/material'
import React, { ComponentProps } from 'react'

type CustomButtonProps = ComponentProps<typeof Button>

export const CustomButton = (
  {children, onClick, ...rest}:CustomButtonProps
) => {
  return (
    <Button 
      className='bg-slate-400'
      {...rest}
    >
      {children}
    </Button>
  )
}
