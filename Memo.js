import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

function Memo() {
  const [counter, setCounter] = useState(0)
  let randomValue =() => {
   let num = 0;
   for (let i = 0; i < 1000000000; i++) {
       num = num+1;
    }
     return num}
     let randomNumber = useMemo(()=> randomValue(),[]);
  return (
    <div class="text-center" >
      <h1>Counter<span class=" mx-2 style={{ color: 'blue' }}  ">{counter}</span></h1>
      

      <button type="button" onClick={()=>{
        setCounter(counter+1)
      }} class="btn btn-success btn-lg mx-2 my-3">+</button>
      
      <h2>{randomNumber}</h2>
      
    </div>
  )
}

export default Memo