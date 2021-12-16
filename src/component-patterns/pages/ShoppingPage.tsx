import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee mug - Card',
  img: './coffee-mug.png',
};

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
        <ProductCard product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" title="Primera versión del componente" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard 
          product={product}
          className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" title="Segunda versión del componente" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
