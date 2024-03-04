import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import styles from './SingleProduct.module.scss';
import NavigateButtons from '../../components/navigateButtons/NavigateButtons';
import AddToCartButton from '../../components/addToCartButton/AddToCartButton';

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productColor = product[0].color[0];
  const productSize = product[0].size ? product[0].size[0] : "";
  const { id } = useParams();
  const [color, setColor] = useState(productColor);
  const [size, setSize] = useState(productSize);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
    <div className={styles.product}>
    <NavigateButtons/>
    </div>
    <div className={styles.product}>
      {product
        .filter((product)=> product.id === id)
        .map((item, index) => {
          return (
            <div 
              key={index}
            >
              <div>
                <img 
                  src={item.img} alt={item.name} 
                  className={styles.image}
                />
              </div>
              <div className={styles.details}>
                <h2 className={styles.name}>{item.name}</h2>
                <p className={styles.price}> ${item.price}</p>
                <div className={styles.selectors}>
                <label className={styles.label}>Pick a Color</label>
                  <select 
                    className={styles.colorSelect}
                    id='color'
                    name='color'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  >
                    {item.color.map((color, index) => {
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
                  <label className={styles.label}>Pick a size</label>
                  <select 
                    className={styles.sizeSelect}
                    id='size'
                    name='size'
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    {item.size.map((size, index) => {
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
              <div className={styles.quantity}>
                <label htmlFor="quantity" className={styles.label}>Quantity:</label>
                <div className={styles.quantityControls}>
                  <button className={styles.quantityButton} onClick={handleDecrement}>-</button>
                  <input type="text" id="quantity" className={styles.quantityInput} value={quantity} readOnly />
                  <button className={styles.quantityButton} onClick={handleIncrement}>+</button>
                </div>
              </div> 
              <div className={styles.product}>
                <AddToCartButton />
              </div>
            </div>
            
          )
        })}
    </div>
    </>
  )
}

export default SingleProduct
