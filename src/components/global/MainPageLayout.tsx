import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import React from 'react';
import GNB from './GNB';
import { LogoHeader } from './Header';

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <LogoHeader />
      {children}
      <GNB />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.BACKGROUND100};
  overflow-y: scroll;
  padding-bottom: 6rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default MainPageLayout;
