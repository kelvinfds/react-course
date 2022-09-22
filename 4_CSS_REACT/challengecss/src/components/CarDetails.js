import React from 'react';
import styles from "./CarDetails.module.css";

const CarDetails = ({brand, model, year}) => {
  return (
    <div>
        <h2 className={styles.carDetail_Title}>Detalhes do Carro</h2>
        <ul className={styles.carDetail_list}>
            <li>Marca: {brand}</li>
            <li>Modelo: {model}</li>
            <li>Ano de Fabricação: {year}</li>
        </ul>
    </div>

  )
}

export default CarDetails