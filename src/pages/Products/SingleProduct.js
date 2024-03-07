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
      <div className={styles.product}>
        <NavigateButtons />
        <div className={styles.productDetails}>
          <div className={styles.detail}>
            <div className={styles.imageContainer}>
              <img src={product.img} alt={product.name} className={styles.image} />
            </div>
            <div className={styles.textDetails}>
              <div>
                <p className={styles.name}>{product.name}</p>
              </div>
              <div>
                <p className={styles.price}>Price: ${product.price}</p>
              </div>
            </div>
          </div>
          <div className={styles.selectorsAndButton}>
            <div className={styles.selectors}>
              <label htmlFor='color' className={styles.label}>Pick a Color:</label>
              <select
                className={styles.colorSelect}
                id='color'
                name='color'
                value={selectedColor}
                onChange={(e) => setColor(e.target.value)}
              >
                {product.color.map((color, index) => (
                  <option key={index} value={color}>
                    {color.toUpperCase()}
                  </option>
                ))}
              </select>
              <label htmlFor='size' className={styles.label}>Pick a Size:</label>
              <select
                className={styles.sizeSelect}
                id='size'
                name='size'
                value={selectedSize}
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.productButton}>
              <AddToCartButton product={product} selectedSize={selectedSize} selectedColor={selectedColor} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default SingleProduct
