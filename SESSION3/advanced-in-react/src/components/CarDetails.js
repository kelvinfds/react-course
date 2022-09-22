import React from 'react'

export default function CarDetails({brand, km, color, newCar}) {
  
    return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Carro Novo</p>}
    </div>
  )
}
