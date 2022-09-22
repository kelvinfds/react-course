import React, { useState } from 'react'

export const ConditionalRender = () => {
    const [x, setX] = useState(true);

    const [name] = useState("Kelvin");
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim</p>}
        {!x && <p>Agora x é false!</p>}
        <h1>If ternário</h1>
        {name === "Kelvin" ? (
        <div>
            <p>O nome é Kelvin</p>
        </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}
