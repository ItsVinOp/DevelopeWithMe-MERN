import React, { createContext, useContext, useState } from 'react'
import B from './B'
let data=createContext();

function A() {
  const [first, setfirst] = useState('hello');
  return (
    <>
    <data.Provider value={first}>
    <h1>Component 1</h1>
    <B val={first}/>
    </data.Provider>
    </>
  )
}

export default A
export {data}