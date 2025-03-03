import { Button } from '@mui/material'
import { Ref, useImperativeHandle, useState } from 'react'

export type CounterRef = {
  count: ()=>number;
  reset: VoidFunction;
}

type Props = {
  counterRef: Ref<CounterRef>
}

export const Counter = ({ counterRef }:Props) => {

  const [count,setCount] = useState(0)

  useImperativeHandle(counterRef,()=>({
    count: ()=> count,
    reset: ()=>setCount(0)
  }),[count])
  
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
