import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import React from 'react';

const Divider = () => {
  return <Wrapper />;
};

const Wrapper = styled.hr`
  width: 100%;
  height: 0.5rem;
  background-color: ${COLOR.GRAY50};
  border: 0;
`;

export default Divider;
