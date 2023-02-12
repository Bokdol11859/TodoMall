import styled from '@emotion/styled';
import React from 'react';

const Skeleton = ({ width, height }: { width: string; height: string }) => {
  return <Wrapper width={width} height={height} />;
};

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #e0e3e9;
  border-radius: 1rem;
`;

export default Skeleton;
