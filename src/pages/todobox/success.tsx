import styled from '@emotion/styled';
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
      <Header isBack text="인증하기" />
      <Wrapper>
        <TodoSuccessTitle>인증이 성공적으로 진행되었어요!</TodoSuccessTitle>
        <TodoSuccessTitle>다음 세션도 투두몰과 함께 해요</TodoSuccessTitle>
        <TodoSuccessBody>
          <Image src="/images/SuccessImage.png" alt="" width={350} height={350} />
        </TodoSuccessBody>
        <TodoSuccessFooter>
          <Button onClick={handleClick} variant="Primary" size="Large" rounder={false}>
            내 투두함으로 이동
          </Button>
        </TodoSuccessFooter>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
`;

const TodoSuccessTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2rem;
`;

const TodoSuccessBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoSuccessFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
`;

export default Success;
