import styled from '@emotion/styled';
import React from 'react';

const Skeleton = ({ width, height }: { width: string; height: string }) => {
  return <Wrapper width={width} height={height} />;
};

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #b7babf;
  border-radius: 1rem;

  @keyframes pulse {
    0% {
      background-color: #b7babf;
    }

    50% {
      background-color: #cbd5e1;
    }

    100% {
      background-color: #b7babf;
    }
  }

  animation: pulse 1.5s infinite ease-in-out;
`;

export default Skeleton;
