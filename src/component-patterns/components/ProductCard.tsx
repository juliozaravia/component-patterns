import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct(0);

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.img ? product.img : noImage}
        alt="Taza de café!"
      />
      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    </div>
  );
};
