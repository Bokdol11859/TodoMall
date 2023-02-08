import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import React from 'react';

const PlanFirst = ({ data }: { data: { title: string; image: string; description: string } }) => {
  return (
    <Container>
      <FirstTitle>지금 시작하면 나만의</FirstTitle>
      <SecondTitle>{data?.title}</SecondTitle>
      <Image src={data?.image} />
      <Paragraph>{data?.description}</Paragraph>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

const FirstTitle = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0;
`;

const SecondTitle = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0.75rem 0;
  color: ${COLOR.PURPLE500};
`;

const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: ${COLOR.GRAY500};
`;

export default PlanFirst;
