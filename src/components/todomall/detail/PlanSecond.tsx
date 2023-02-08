import styled from '@emotion/styled';
import React from 'react';

const PlanSecond = ({ data }: { data: { title: string; description: string }[] }) => {
  return (
    <Container>
      <FirstTitle>이럴 때 들으면 좋아요</FirstTitle>
      <>
        {data?.map((datum) => (
          <>
            <SubTitle>{datum?.title}</SubTitle>
            <Paragraph>{datum?.description}</Paragraph>
          </>
        ))}
      </>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
`;

const FirstTitle = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const SubTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1rem;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 0.85rem;
  line-height: 1.5rem;
  color: #888888;
  margin-bottom: 1.25rem;
`;

export default PlanSecond;
