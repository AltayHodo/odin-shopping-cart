import { useState, useEffect } from 'react';
import Item from './Item';
import { useOutletContext } from 'react-router-dom';
import styles from "../Styles/Catalog.module.css"


export default function Catalog() {
  const items = useOutletContext()

  if (!items) {
    return <div>Loading...</div>
  }

  return (<div className={styles.catalog}>
    {items.map(item => (
      <Item key={item.id} {...item} />
    ))}

  </div>);
}
