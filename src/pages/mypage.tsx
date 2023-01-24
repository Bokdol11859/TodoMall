import { getUserInfo } from '@src/common/api/fetcher';
import { RootState } from '@src/common/redux/store';
import MainPageLayout from '@src/components/global/MainPageLayout';
import MyPageHeader from '@src/components/mypage/MyPageHeader';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSelector } from 'react-redux';

const MyPage = () => {
  const { userid, email } = useSelector((store: RootState) => store.userinfo);

  const { data, isLoading, error } = useQuery(['UserInfo'], () => getUserInfo(email));

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{String(error)}</div>;
  }

  return (
    <MainPageLayout>
      <MyPageHeader email={email} name={data.name} profileImage={data.image} />
    </MainPageLayout>
  );
};

export default MyPage;
