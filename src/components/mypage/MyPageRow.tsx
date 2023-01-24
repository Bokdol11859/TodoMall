import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import React from 'react';
import { FailIcon, InProgressIcon, SuccessIcon } from '../icons/ProgressIcons';

interface MyPageRowProps {
  id: number;
  title: string;
  icon: string;
  isSuccess?: boolean;
  isOnGoing?: boolean;
  isFail?: boolean;
}

const MyPageRow = ({ id, title, icon, isSuccess = false, isOnGoing = false, isFail = false }: MyPageRowProps) => {
  const getProgressIcon = ({
    isSuccess,
    isOnGoing,
    isFail,
  }: {
    isSuccess: boolean;
    isOnGoing: boolean;
    isFail: boolean;
  }) => {
    if (isSuccess) {
      return <SuccessIcon />;
    }
    if (isOnGoing) {
      return <InProgressIcon />;
    }
    if (isFail) {
      return <FailIcon />;
    }
  };

  return (
    <Container>
      <RowStart>
        <IconBackground>
          <Icon src={`${icon}`} />
        </IconBackground>
      </RowStart>
      <RowBody>
        <RowNumber>{id}번째 도전</RowNumber>
        <RowTitle>{title}</RowTitle>
      </RowBody>
      <ProgressIconWrapper>{getProgressIcon({ isSuccess, isOnGoing, isFail })}</ProgressIconWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const RowStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const IconBackground = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background-color: ${COLOR.WHITE};
`;

const Icon = styled.img`
  width: 44px;
`;

const RowBody = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RowNumber = styled.p`
  margin: 0;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.2rem;
  color: ${COLOR.GRAY400};
`;

const RowTitle = styled.p`
  margin: 0;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${COLOR.GRAY600};
`;

const ProgressIconWrapper = styled.div`
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MyPageRow;
