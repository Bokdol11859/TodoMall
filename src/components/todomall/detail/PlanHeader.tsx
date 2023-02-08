import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import Tags from '@src/components/global/Tags';
import React from 'react';

type Props = {};

const PlanHeader = ({
  title,
  subDescription,
  informationTags,
}: {
  title: string;
  subDescription: string;
  informationTags: string[];
}) => {
  return (
    <ProductHeader>
      <ProductSubtitle>{subDescription}를 위한</ProductSubtitle>
      <ProductTitle>{title}</ProductTitle>
      <Tags tags={informationTags} />
    </ProductHeader>
  );
};

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
  line-height: 2.5rem;
`;

export default PlanHeader;
