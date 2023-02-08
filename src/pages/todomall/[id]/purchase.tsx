import styled from '@emotion/styled';
import { purchaseProduct } from '@src/common/api/fetcher';
import COLOR from '@src/common/constants/Colors';
import { RootState } from '@src/common/redux/store';
import Button from '@src/components/global/Button';
import { Header } from '@src/components/global/Header';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const Purchase = () => {
  const { query, push } = useRouter();
  const queryClient = useQueryClient();

  const userid = useSelector((store: RootState) => store.userinfo.userid);

  const planMutation = useMutation({
    mutationFn: () => purchaseProduct(query.id, userid),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      push(`/todomall/${query.id}/success`);
    },
  });

  const handleClick = async () => {
    planMutation.mutate();
  };

  return (
    <Container>
      <Header text="결제하기" isBack />
      <TitleWrapper>
        <Title>베타테스트 기간 동안만 한정해</Title>
        <Title>투두몰의 모든 플랜을 무료로 드려요</Title>
        <br />
        <SubTitle>현재는 무료로 제공되고 있는 플랜 중 일부가</SubTitle>
        <SubTitle>베타테스트가 끝난 이후에 유료로 전환될 수 있어요</SubTitle>
      </TitleWrapper>
      <Body>
        <Image src="/images/PurchaseImage.png" alt="" width={350} height={350} />
      </Body>
      <Footer>
        <Button variant="Primary" size="Large" rounder={false} onClick={handleClick} isLoading={planMutation.isLoading}>
          확인했어요
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

export default Purchase;
