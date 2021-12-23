import { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import {
  InitialValues,
  OnChangeArgs,
  Product,
  ProductContextProps,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import { ProductButtons, ProductImage, ProductTitle } from './';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface ProductCardProps {
  product: Product;
  children: (msg: string) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children('Hello world!')}
      </div>
    </Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
