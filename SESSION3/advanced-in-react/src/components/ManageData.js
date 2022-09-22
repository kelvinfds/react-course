import React, { useState } from 'react'

export const ManageData = () => {

    const [number, setNumber] = useState(10);
  return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number + 10)}>Mudar Variavel</button>
    </div>
  )
}
