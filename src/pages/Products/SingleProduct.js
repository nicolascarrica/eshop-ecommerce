import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import styles from './SingleProduct.module.scss';
import NavigateButtons from '../../components/navigateButtons/NavigateButtons';
import AddToCartButton from '../../components/addToCartButton/AddToCartButton';



const SingleProduct = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.singleProduct);
  const product = products.find((product) => product.id === id);

  const [selectedColor, setColor] = useState(product.color[0]);
  const [selectedSize, setSize] = useState(product.size ? product.size[0] : '');

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <div className={styles.product}>
    <NavigateButtons/>
    </div>
    <div className={styles.product}>
      <div>
        <div>
          <img 
            src={product.img} alt={product.name} 
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <h2 className={styles.name}>{product.name}</h2>
          <p className={styles.price}> ${product.price}</p>
          <div className={styles.selectors}>
          <label htmlFor='color' className={styles.label}>Pick a Color</label>
            <select 
              className={styles.colorSelect}
              id='color'
              name='color'
              value={selectedColor}
              onChange={(e) => setColor(e.target.value)}
            >
              {product.color.map((color, index) => {
                return (
                  <option
                    key={index}
                    value={color}
                  >
                    {color.toUpperCase()}
                  </option>
                )
              })}
            </select>
            <label htmlFor='size' className={styles.label}>Pick a size</label>
            <select 
              className={styles.sizeSelect}
              id='size'
              name='size'
              value={selectedSize}
              onChange={(e) => setSize(e.target.value)}
            >
              {product.size.map((size, index) => {
                return (
                  <option
                    key={index}
                    value={size}
                  >
                    {size}
                  </option>
                )
              })}
            </select>
          </div> 
        </div>
        <div className={styles.product}>
        <AddToCartButton product={product} selectedSize={selectedSize} selectedColor={selectedColor} />
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleProduct
