import { useState, useEffect } from 'react';
import Item from './Item';
import { useOutletContext } from 'react-router-dom';

export default function Catalog() {
  const items = useOutletContext()

  if (!items) {
    return <div>Loading...</div>
  }

  return (<div className="catalog">
    {items.map(item => (
      <Item key={item.id} item={item} />
    ))}

  </div>);
}
