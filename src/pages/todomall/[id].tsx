import styled from '@emotion/styled';
import React from 'react';
import { Header } from '@src/components/global/Header';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '@src/common/api/fetcher';
import Image from 'next/image';
import COLOR from '@src/common/constants/Colors';
import Tags from '@src/components/global/Tags';
import { TagIcon } from '@src/common/constants/TagIcon';
import Divider from '@src/components/global/Divider';

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
      <ProductInformation>
        <ProductPriceContainer>
          <p>클래스 구매가</p>
          <ProductPrice>{10000}원</ProductPrice>
        </ProductPriceContainer>
        <ProductTags>
          {productQuery.data?.summarizedTags.map((tag: any) => (
            <ProductTagWrapper>
              <ProductTag>
                <ProductTagIcon src={`/images/${TagIcon[tag]}.svg`} />
              </ProductTag>
              <ProductTagName>{tag}</ProductTagName>
            </ProductTagWrapper>
          ))}
        </ProductTags>
        <ProductDescription>{productQuery.data?.description}</ProductDescription>
        <ProductCreatorContainer>
          <ProductCreatorImage
            src={productQuery.data?.creator.image || '/images/System_Profile.svg'}
            alt={'Profile Image'}
            width={64}
            height={64}
          />
          <ProductCreatorInformation>
            <ProductCreatorName>
              <span>{productQuery.data?.creator.name}</span>강사님
            </ProductCreatorName>
            <ProductCreatorDescription>{productQuery.data?.creator.description}</ProductCreatorDescription>
          </ProductCreatorInformation>
        </ProductCreatorContainer>
      </ProductInformation>
      <Divider />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.BACKGROUND50};
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
  font-size: 1.75rem;
  line-height: 2.5rem;
`;

const ProductInformation = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 1.25rem;
`;

const ProductPriceContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${COLOR.PURPLE500};
`;

const ProductTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 0 1rem;
`;

const ProductTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductTag = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.PURPLE50};
  border-radius: 100%;
`;

const ProductTagIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ProductTagName = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: ${COLOR.GRAY400};
`;

const ProductDescription = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.5rem;
`;

const ProductCreatorContainer = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLOR.WHITE};
  border-radius: 1rem;
  border: 2px solid ${COLOR.GRAY100};
`;

const ProductCreatorImage = styled(Image)`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  margin: 0 1rem;
`;

const ProductCreatorInformation = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${COLOR.GRAY400};
`;

const ProductCreatorName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.25rem;
  margin: 0;

  span {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: ${COLOR.BLACK};
    margin-right: 0.25rem;
  }
`;

const ProductCreatorDescription = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${COLOR.GRAY400};
  margin: 0;
`;

export default Detail;
