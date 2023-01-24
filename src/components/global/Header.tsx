import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BackArrowIcon } from '../icons/SystemIcons';

export interface HeaderProps {
  isBack?: boolean;
  text: string;
}

export const Header = ({ isBack = false, text }: HeaderProps) => {
  const { back } = useRouter();

  return (
    <Container>
      <ButtonWrapper>
        <BackArrowIcon onClick={back} isBack={isBack} />
      </ButtonWrapper>
      <Title>{text}</Title>
    </Container>
  );
};

export const LogoHeader = () => (
  <Container>
    <Image src="/assets/HeaderLogo.png" alt="HeaderLogo" width={148} height={32} />
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.BACKGROUND50};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 1rem;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
`;
