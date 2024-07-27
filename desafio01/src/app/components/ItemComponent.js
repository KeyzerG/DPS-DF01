import React from 'react';
import styles from './ItemComponent.module.css';

const ItemComponent = ({ titulo, descripcion, caracteristicas, imagen }) => {
  return (
    <div className={styles.item}>
      <h2>{titulo}</h2>
      <img src={imagen} alt={titulo} className={styles.image} />
      <p>{descripcion}</p>
      <p><strong>Características:</strong> {caracteristicas}</p>
    </div>
  );
};

export default ItemComponent;
