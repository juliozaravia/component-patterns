import { Product } from "../interfaces/interfaces";

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

export const products: Product[] = [productOne, productTwo];