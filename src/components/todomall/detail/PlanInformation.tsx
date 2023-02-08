import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import { TagIcon } from '@src/common/constants/TagIcon';
import Image from 'next/image';
import React from 'react';

const PlanInformation = ({ description, creator, tags }: { description: string; creator: any; tags: string[] }) => {
  return (
    <ProductInformation>
      <ProductPriceContainer>
        <p>클래스 구매가</p>
        <ProductPrice>무료</ProductPrice>
      </ProductPriceContainer>
      <ProductTags>
        {tags?.map((tag: string) => (
          <ProductTagWrapper>
            <ProductTag>
              {/* 
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error */}
              <ProductTagIcon src={`/images/${TagIcon[tag]}.svg`} />
            </ProductTag>
            <ProductTagName>{tag}</ProductTagName>
          </ProductTagWrapper>
        ))}
      </ProductTags>
      <ProductDescription>{description}</ProductDescription>
      <ProductCreatorContainer>
        <ProductCreatorImage
          src={creator?.image || '/images/System_Profile.svg'}
          alt={'Profile Image'}
          width={64}
          height={64}
        />
        <ProductCreatorInformation>
          <ProductCreatorName>
            <span>{creator?.name}</span>강사님
          </ProductCreatorName>
          <ProductCreatorDescription>{creator?.description}</ProductCreatorDescription>
        </ProductCreatorInformation>
      </ProductCreatorContainer>
    </ProductInformation>
  );
};

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
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLOR.WHITE};
  border-radius: 1rem;
  border: 2px solid ${COLOR.GRAY100};
  gap: 1rem;
`;

const ProductCreatorImage = styled(Image)`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
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

export default PlanInformation;
