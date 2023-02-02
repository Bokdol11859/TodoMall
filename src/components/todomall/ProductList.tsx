import styled from '@emotion/styled';
import Product from '@src/common/types/Product.type';
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ productList }: { productList: Product[] }) => {
  return (
    <Container>
      {productList.map((product: Product) => (
        <ProductCard
          subtitle={product.subDescription}
          title={product.title}
          description={product.description}
          icon={product.icon}
          tags={product.informationTags}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
`;

export default ProductList;
