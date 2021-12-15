import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';

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
        {/* <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Hola mundo!" />
          <ProductCard.Buttons />
        </ProductCard> */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="Hola mundo!" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
