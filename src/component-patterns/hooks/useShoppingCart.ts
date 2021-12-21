import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
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
      const productInCart: ProductInCart = prevState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prevState,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...restPrevState } = prevState; 
      return restPrevState;
    });
  };

  return {
    shoppingCart,
    onProductCountChange
  }
}