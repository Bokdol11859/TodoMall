import styled from '@emotion/styled';
import Class from '@src/common/types/Class.type';
import { checkFail, checkSuccess } from '@src/common/utils/checkClassState';
import { getCurrentSession } from '@src/common/utils/getCurrentSession';
import React from 'react';
import SessionCard from './SessionCard';

const SessionList = ({ data }: { data: Class[] }) => {
  return (
    <Container>
      {data.map((_Class: Class) => {
        return (
          <SessionCard isFail={checkFail(_Class)} session={getCurrentSession(_Class.sessions)} title={_Class.title} />
        );
      })}
      <SessionCard isInvisible isFail={checkFail(data[0])} session={getCurrentSession(data[0].sessions)} title="" />
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
