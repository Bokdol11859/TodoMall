import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import Button from '@src/components/global/Button';
import { Header } from '@src/components/global/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const Success = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push('/todobox');
  };

  return (
    <Container>
      <Header text="결제하기" isBack />
      <TitleWrapper>
        <Title>클래스가 성공적으로 추가됐어요</Title>
        <Title>데드라인 내에 미션 인증을 잊지 마세요</Title>
        <br />
        <SubTitle>시간 내에 완수해야 클래스의 다음 세션을 계속</SubTitle>
        <SubTitle>들을 수 있어요. 12시부터 데드라인이 시작될 거에요.</SubTitle>
      </TitleWrapper>
      <Body>
        <Image src="/images/SuccessImage.png" alt="" width={350} height={350} />
      </Body>
      <Footer>
        <Button variant="Primary" size="Large" rounder={false} onClick={handleClick}>
          내 투두함으로 이동
        </Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 1;
  flex-direction: column;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2rem;
  margin: 0;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${COLOR.GRAY400};
  margin: 0;
`;

const Footer = styled.div`
  bottom: 0;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Success;
