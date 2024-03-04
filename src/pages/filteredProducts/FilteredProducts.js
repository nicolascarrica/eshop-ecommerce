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
        {products
          .filter((product) => product.type === type)
          .map((product, idex) => (
            <div key={idex}>
            <ProductCard
              id={product.id}
              name={product.name}
              img={product.img}
              colors={product.color}
              size={product.size}
              price={product.price}
            />
            </div>
          ))}
      </div>
    </div>

  )

}

export default FilteredProducts
