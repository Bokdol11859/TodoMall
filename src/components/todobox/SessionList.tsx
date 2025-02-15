import styled from '@emotion/styled';
import Class from '@src/common/types/Class.type';
import { checkFail, checkSuccess } from '@src/common/utils/checkClassState';
import { getCurrentSession } from '@src/common/utils/getCurrentSession';
import React from 'react';
import { SessionCardSkeleton } from '../global/Skeleton';
import SessionCard from './SessionCard';

const SessionList = ({ isLoading, data }: { isLoading: boolean; data: Class[] }) => {
  return (
    <Container>
      {isLoading
        ? Array(10)
            .fill('')
            .map((_, idx) => <SessionCardSkeleton key={idx} />)
        : data.map((_Class: Class) => {
            return (
              <SessionCard
                productId={_Class.id}
                isFail={checkFail(_Class)}
                session={getCurrentSession(_Class.sessions)}
                title={_Class.title}
              />
            );
          })}
      {!isLoading && (
        <SessionCard isInvisible productId="" isFail={false} session={getCurrentSession(data[0].sessions)} title="" />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export default SessionList;
