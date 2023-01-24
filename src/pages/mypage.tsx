import { getUserInfo } from '@src/common/api/fetcher';
import { RootState } from '@src/common/redux/store';
import MainPageLayout from '@src/components/global/MainPageLayout';
import { useQuery } from '@tanstack/react-query';

import React from 'react';
import { useSelector } from 'react-redux';

const MyPage = () => {
  const { userid, email } = useSelector((store: RootState) => store.userinfo);

  const { data, isLoading, error } = useQuery(['UserInfo'], () => getUserInfo(email));

  return <MainPageLayout>mypage</MainPageLayout>;
};

export default MyPage;
