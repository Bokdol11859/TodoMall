import styled from '@emotion/styled';
import { getUserInfo } from '@src/common/api/fetcher';
import { RootState } from '@src/common/redux/store';
import { checkIsNotSuccess } from '@src/common/utils/checkClassState';
import MainPageLayout from '@src/components/global/MainPageLayout';
import SessionList from '@src/components/todobox/SessionList';
import StatusBar from '@src/components/todobox/StatusBar';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSelector } from 'react-redux';

const TodoBox = () => {
  const { email } = useSelector((store: RootState) => store.userinfo);

  const UserInfoQuery = useQuery(['UserInfo'], () => getUserInfo(email));

  if (UserInfoQuery.isLoading) {
    return <div>Loading. . .</div>;
  }

  return (
    <MainPageLayout>
      <StatusBar
        image={UserInfoQuery.data.image}
        name={UserInfoQuery.data.name}
        count={UserInfoQuery.data.ownProducts.filter(checkIsNotSuccess).length}
      />
      <TodoBoxWrapper>
        <SessionList data={UserInfoQuery.data.ownProducts.filter(checkIsNotSuccess)} />
      </TodoBoxWrapper>
    </MainPageLayout>
  );
};

const TodoBoxWrapper = styled.div`
  margin: auto;
  margin-top: 7rem;
`;

export default TodoBox;
