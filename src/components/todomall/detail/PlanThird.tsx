import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import React from 'react';

const PlanThird = ({ data }: { data: { icon: string; description: string }[] }) => {
  return (
    <Container>
      <FirstTitle>이런 사람이 들으면 좋아요</FirstTitle>
      <Body>
        {data?.map((datum, i) => (
          <Row key={i}>
            <ProfileImage alt="profile" src={datum.icon} />
            <Detail>
              <Order>{i + 1}번째,</Order>
              <Who>{datum.description}</Who>
            </Detail>
          </Row>
        ))}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
`;

const FirstTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 4rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.25rem;
  gap: 0.25rem;
`;

const Order = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.5rem;
  color: ${COLOR.GRAY400};
  margin: 0;
`;

const Who = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1rem;
`;

export default PlanThird;
