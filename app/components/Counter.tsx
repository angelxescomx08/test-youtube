import { Button } from '@mui/material'
import { useState } from 'react'

export const Counter = () => {

  const [count,setCount] = useState(0)
  
  return (
    <div>
      <p className='text-white font-medium text-xl'>{count}</p>
      <div className='flex items-center gap-4'>
        <Button
          className='button'
          onClick={()=>setCount(count-1)}
        >
          -1
        </Button>
        <Button
          className='button'
          onClick={()=>setCount(count+1)}
        >
          +1
        </Button>
      </div>
    </div>
  )
}
