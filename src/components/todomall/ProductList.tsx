import styled from '@emotion/styled';
import Product from '@src/common/types/Product.type';
import React from 'react';
import Skeleton from '../global/Skeleton';
import ProductCard from './ProductCard';

const ProductList = ({ productList }: { productList: Product[] }) => {
  return (
    <Container>
      <>
        {productList === undefined
          ? Array(10)
              .fill('')
              .map((_, i) => <Skeleton key={i} width={'100%'} height={'180px'} />)
          : productList.map((product: Product) => (
              <ProductCard
                id={product.id}
                subtitle={product.subDescription}
                title={product.title}
                description={product.description}
                icon={product.icon}
                tags={product.informationTags}
              />
            ))}
      </>
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
