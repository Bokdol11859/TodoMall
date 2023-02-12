import styled from '@emotion/styled';
import React from 'react';

const Skeleton = ({ width, height }: { width: string; height: string }) => {
  return (
    <Container width={width} height={height}>
      <Icon />
      <SubTitle />
      <Title />
      <Description />
      <TagsList>
        <Tag />
        <Tag />
        <Tag />
      </TagsList>
    </Container>
  );
};

const Container = styled.div<{ width: string; height: string }>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #e0e3e9;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 0.25rem;
`;

const Icon = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: #caced7;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
`;

const SubTitle = styled.div`
  background-color: #caced7;
  width: 50%;
  height: 2rem;
  border-radius: 0.5rem;
`;

const Title = styled.div`
  background-color: #caced7;
  width: 60%;
  height: 2.5rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

const Description = styled.div`
  background-color: #caced7;
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

const TagsList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  height: 1.5rem;
  width: 3rem;
  background-color: #caced7;
  border-radius: 0.5rem;
`;

export default Skeleton;
