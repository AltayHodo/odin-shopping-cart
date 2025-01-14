import { useState, useEffect } from 'react';
import Item from './Item';
import { useOutletContext, useNavigate } from 'react-router-dom';
import styles from "../Styles/Catalog.module.css"


export default function Catalog() {
  const items = useOutletContext()
  const navigate = useNavigate();

  if (!items) {
    return <div>Loading...</div>
  }

  const handleClickItem = (id) => {
    navigate(`/catalog/${id}`)
  }


  return (<div className={styles.catalog}>
    {items.map(item => (
      <div key={item.id} onClick={() => handleClickItem(item.id)}> 
        <Item key={item.id} {...item} />
      </div>
    ))}

  </div>);
}
