import { ProductCard } from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffee mug - Card',
  img: './coffee-mug.png'
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
        <ProductCard product={product} />
      </div>
    </div>
  );
};
