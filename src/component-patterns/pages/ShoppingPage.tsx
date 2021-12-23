import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product: Product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page!</h1>
      <hr />
      <ProductCard 
        key={product.id} 
        product={product} 
        className="bg-dark"
        initialValues={{
          count: 4,
          maxCount: 10
        }}>
        <ProductImage className="custom-image" />
        <ProductTitle className="text-white" title="First product" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};
