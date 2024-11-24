import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0)
  const [count, setCount] = useState(5)
  
  const a = useRef(5)

  let use=useRef();

  useEffect(() => {
    console.log('useEffect triggered');
  
  })
  

  function increment() {
    setCounter(counter+1);
  }
  function decrement(){
    setCounter(counter-1);
  }
  function restart(){
    setCount(count+5);
  }
  function change(){
    use.current.style.color ='green'
  }


  return (
    <div class="text-center" >
      <h1>Counter<span class=" mx-2 style={{ color: 'blue' }}  ">{counter}</span></h1>
      <h1>Count<span class=" mx-2 style={{ color: 'blue' }}  ">{count}</span></h1>
      <h1>Value of A<span class=" mx-2 style={{ color: 'blue' }}  ">{a.current=a.current+1}</span></h1>

      <button type="button" onClick={increment} class="btn btn-success btn-lg mx-2 my-3">+</button>
      <button type="button" onClick={restart} class="btn btn-warning btn-lg mx-2">Restart</button>
      <button type="button" onClick={decrement} class="btn btn-danger btn-lg">-</button>
      <button type="button" ref={use} onClick={change} class="btn btn-danger btn-lg">Change</button>
      
    </div>
  )
}

export default Counter
