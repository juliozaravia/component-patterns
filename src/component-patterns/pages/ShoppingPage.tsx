import { useState } from 'react';
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const productOne = {
  id: '1',
  title: 'Coffee mug - Card',
  img: './coffee-mug.png',
};

const productTwo = {
  id: '2',
  title: 'Coffee mug - Meme',
  img: './coffee-mug2.png',
};

const products: Product[] = [productOne, productTwo];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prevState) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...restPrevState } = prevState;

        return restPrevState;
      }

      return {
        ...prevState,
        [product.id]: { ...product, count },
      };
    });
  };

  return (
    <div>
      Shopping Page!
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product: Product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark"
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" title="First product" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => {
          return (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark"
              style={{
                width: '100px',
              }}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};
