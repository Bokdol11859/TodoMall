import styled from '@emotion/styled';
import React from 'react';
import { Header } from '@src/components/global/Header';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '@src/common/api/fetcher';
import Image from 'next/image';
import COLOR from '@src/common/constants/Colors';
import Tags from '@src/components/global/Tags';

const Detail = () => {
  const { query } = useRouter();

  const productQuery = useQuery(['product', query.id], () => getProductDetail(query.id));

  return (
    <Container>
      <Header isBack text={productQuery.data?.title} />
      <ProductImage src={productQuery.data?.image} alt="" width={400} height={300} />
      <ProductHeader>
        <ProductSubtitle>{productQuery.data?.subDescription}를 위한</ProductSubtitle>
        <ProductTitle>{productQuery.data?.title}</ProductTitle>
        <Tags tags={productQuery.data?.informationTags} />
      </ProductHeader>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: auto;
  mask-image: linear-gradient(180deg, #fbfbfb 0%, rgba(251, 251, 251, 0) 100%);
`;

const ProductHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const ProductSubtitle = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${COLOR.GRAY500};
`;

const ProductTitle = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export default Detail;
