import styled from '@emotion/styled';
import React from 'react';
import { Header } from '@src/components/global/Header';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '@src/common/api/fetcher';
import Image from 'next/image';
import COLOR from '@src/common/constants/Colors';
import Divider from '@src/components/global/Divider';
import PlanFirst from '@src/components/todomall/detail/PlanFirst';
import PlanSecond from '@src/components/todomall/detail/PlanSecond';
import PlanThird from '@src/components/todomall/detail/PlanThird';
import PlanCurriculum from '@src/components/todomall/detail/PlanCurriculum';
import PlanInformation from '@src/components/todomall/detail/PlanInformation';
import PlanHeader from '@src/components/todomall/detail/PlanHeader';
import Button from '@src/components/global/Button';

const Detail = () => {
  const { query, push } = useRouter();

  const productQuery = useQuery(['product', query.id], () => getProductDetail(query.id));

  return (
    <Container>
      <Header isBack text={productQuery.data?.title} />
      <ProductImage src={productQuery.data?.image} alt="" width={400} height={300} />
      <PlanHeader
        subDescription={productQuery.data?.subDescription}
        title={productQuery.data?.title}
        informationTags={productQuery.data?.informationTags}
      />
      <PlanInformation
        description={productQuery.data?.description}
        creator={productQuery.data?.creator}
        tags={productQuery.data?.summarizedTags}
      />
      <Divider />
      <PlanFirst data={productQuery.data?.expectIts[0]} />
      <Divider />
      <PlanSecond data={productQuery.data?.recommends} />
      <Divider />
      <PlanThird data={productQuery.data?.recommendUsers} />
      <Divider />
      <PlanCurriculum data={productQuery.data?.sessions} />
      <Footer>
        <Button
          onClick={() => {
            push(`/todomall/${query.id}/purchase`);
          }}
          size="Large"
          rounder={false}
          variant="Primary">
          클래스 도전하기
        </Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  background-color: ${COLOR.BACKGROUND50};
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: auto;
  mask-image: linear-gradient(180deg, #fbfbfb 0%, rgba(251, 251, 251, 0) 100%);
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

export default Detail;
