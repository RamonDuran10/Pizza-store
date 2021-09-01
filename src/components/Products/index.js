import React from "react";
import { ProductData } from "./Data";
import {
  ProductContainer,
  ProcductsHeaading,
  ProductWraper,
  ProducCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({heading, data }) => {
  return (
    <ProductContainer>
      <ProcductsHeaading>{heading}</ProcductsHeaading>
      <ProductWraper>
        {ProductData.map((product, index) => {
          return (
            <ProducCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.description}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProducCard>
          );
        })}
      </ProductWraper>
    </ProductContainer>
  );
};

export default Products;
