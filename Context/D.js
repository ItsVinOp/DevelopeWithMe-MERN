import React, { useContext } from 'react'
import { data } from './A'

function D() {
  let receiveData=useContext(data);
  return (
    <>
    <h1>Component 4</h1>
    <h2>{receiveData}</h2>
    </>
  )
}

export default D