import React, { useEffect, useState } from 'react'
import { currency, getProducts } from './products';

const HomeContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, [])
  return (
    <div className='grid grid-cols-4 gap-5'>
      {products.map((product) => (
        <div key={product.id}>
          <img 
            className='w-full object-cover h-3/4'
            src={product.image} 
            alt={product.name} 
          />
          <div className='flex'>
            <div className='flex-grow font-bold'>
              <a>{product.name}</a>
            </div>
            <div className='flex-end'>{currency.format(product.price)}</div>
          </div>
          <div className='text-sm mt-4'>
            {product.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeContent