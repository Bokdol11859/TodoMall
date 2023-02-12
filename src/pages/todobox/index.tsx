import styled from '@emotion/styled';
import MainPageLayout from '@src/components/global/MainPageLayout';
import StatusBar from '@src/components/todobox/StatusBar';
import React from 'react';

const TodoBox = () => {
  return (
    <MainPageLayout>
      <TodoBoxWrapper>
        <StatusBar
          image="https://k.kakaocdn.net/dn/ipesc/btrTR0GQ3Ov/Ieom0tqjpt3UKp6nZOXjZ1/img_640x640.jpg"
          name="박준열"
          count={3}
        />
      </TodoBoxWrapper>
    </MainPageLayout>
  );
};

const TodoBoxWrapper = styled.div`
  margin-top: 4rem;
`;

export default TodoBox;
