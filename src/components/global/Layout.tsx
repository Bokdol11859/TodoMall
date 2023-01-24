import styled from '@emotion/styled';
import React from 'react';
import COLOR from '../../common/constants/Colors';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: relative;
  height: 100%;
  margin: auto;
  max-width: 900px;
  background: ${COLOR.BACKGROUND50};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Layout;
