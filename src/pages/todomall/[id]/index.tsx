import styled from '@emotion/styled';
import React from 'react';
import { Header } from '@src/components/global/Header';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getAllProductIds, getProductDetail } from '@src/common/api/fetcher';
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

const Detail = ({ data }: any) => {
  const { query, push } = useRouter();

  return (
    <Container>
      <Header isBack text={data.title} />
      <ProductImage src={data.image} alt="" width={400} height={300} />
      <PlanHeader subDescription={data.subDescription} title={data.title} informationTags={data.informationTags} />
      <PlanInformation description={data.description} creator={data.creator} tags={data.summarizedTags} />
      <Divider />
      <PlanFirst data={data.expectIts[0]} />
      <Divider />
      <PlanSecond data={data.recommends} />
      <Divider />
      <PlanThird data={data.recommendUsers} />
      <Divider />
      <PlanCurriculum data={data.sessions} />
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

export async function getStaticPaths() {
  let ids = await getAllProductIds();
  const paths = ids.map((id) => ({
    params: { id: id },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: any) {
  const data = await getProductDetail(params.id);

  return {
    props: {
      data,
    },
  };
}

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
