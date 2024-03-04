
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NavigateButtons.module.scss';
import { filterProducts } from '../../redux/slice/productSlice';

const NavigateButtons = () => {
  const buttons = ['Football Boots', 'Shoes', 'Jackets', 'T-Shirt', 'Hoodies'];
  const dispatch = useDispatch();

  return (
    <div className={styles['navigate-buttons']}>
      <div className={styles['custom-wrapper']}>
        {buttons.map((button, index) => {
          return (
            <div key={index} className={styles['button-wrapper']}>
              <Link to={"/filteredProducts/" + button}>
                <button
                  className={`${styles['custom-button']}`}
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavigateButtons;
