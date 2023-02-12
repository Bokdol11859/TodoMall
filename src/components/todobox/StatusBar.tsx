import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import React from 'react';
import Profile from '../global/Profile';

export interface StatusBarProps {
  image: string;
  name: string;
  count: number;
}

const StatusBar = ({ image, name, count }: StatusBarProps) => {
  return (
    <Container>
      <Profile image={image} isSmall />
      <Description>
        <CheerText>힘내세요, {name}님!</CheerText>
        <TodoCount>
          <span>{count}개의 투두</span> 도전 중
        </TodoCount>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 1rem;
`;

const CheerText = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${COLOR.GRAY500};
  margin: 0;
`;

const TodoCount = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2rem;
  color: ${COLOR.GRAY600};
  margin: 0;
  span {
    color: ${COLOR.PURPLE500};
  }
`;

export default StatusBar;
