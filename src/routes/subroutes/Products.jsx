import React, { useEffect, useState } from 'react';
import { productsInstance } from '../../api/instance';
import './Products.css'

const Products = () => {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    productsInstance.get("/products")
    .then(res => setProducts(res.data))

    .catch(err => console.log(err))
  }, []);
  
  console.log(products);
  
  
  return (
    <div className='container product-container'>
    {
      products?.map((product, index) => {
        return <div key={index} className='product'>
        <img src={product.images?.at(0) || "https://picsum.photos/200/300"} alt="" />
        <h4>Title: {product?.title}</h4>
        <h5>Description: {product?.description}</h5>
        <h4><i>Price: ${product?.price}</i></h4>
        </div>
      })
    }
    </div>
    );
  }
  
  export default Products;
  