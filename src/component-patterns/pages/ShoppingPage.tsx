import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const {shoppingCart, onProductCountChange} = useShoppingCart()

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
              value={shoppingCart[product.id]?.count || 0}
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
              value={product.count}
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
