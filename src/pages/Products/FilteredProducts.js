import React from 'react'
import styles from './FilteredProducts.module.scss'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavigateButtons from '../../components/navigateButtons/NavigateButtons';
import ProductCard from '../../components/productCard/ProductCard';

const FilteredProducts = () => {
  const products = useSelector(state => state.products.filteredProducts);
  const { type } = useParams();
  return (
    <div className={styles['product-container']}>
      <NavigateButtons /> 
      <div>
        <h1 className={styles.title}>{type}</h1>
      </div>
      <div className={styles.grid}>
        {products.length > 0 ? (
          products
            .filter(product => product.type === type)
            .map((product, index) => (
              <div key={index}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  img={product.img}
                  colors={product.color}
                  size={product.size}
                  price={product.price}
                />
              </div>
            ))
        ) : null}
      </div>
      {products.length === 0 && (
        <div className={styles.noProductsMessage}>
         <p>No products yet</p> 
        </div>
      )}
    </div>
  );

}

export default FilteredProducts
