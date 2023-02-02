import styled from '@emotion/styled';
import Class from '@src/common/types/Class.type';
import { checkFail, checkIsNotFail, checkIsNotSuccess, checkSuccess } from '@src/common/utils/checkClassState';
import React from 'react';
import MyPageRow from './MyPageRow';

const MyPageBody = ({ classes }: { classes: Class[] }) => {
  return (
    <Container>
      {classes.map((_class: Class, idx: number) => (
        <MyPageRow
          id={classes.length - idx}
          title={_class.title}
          icon={_class.icon}
          isSuccess={checkSuccess(_class)}
          isFail={checkFail(_class)}
          isOnGoing={checkIsNotFail(_class) && checkIsNotSuccess(_class)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 17.5rem;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default MyPageBody;
