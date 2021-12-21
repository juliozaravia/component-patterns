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

export const ShoppingPage = () => {
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
            <ProductCard key={product.id} product={product} className="bg-dark">
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" title="First product" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>
      <div className="shopping-cart">
        <ProductCard 
          product={productTwo} 
          className="bg-dark"
          style={{
            width: '100px'
          }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
