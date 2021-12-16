import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface ProductImageProps {
  img?: string; 
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
  const { product } = useContext(productContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img className={`${styles.productImg} ${className}`} style={style} src={imgToShow} alt="Product" />;
};