import styled from '@emotion/styled';
import { getUserInfo } from '@src/common/api/fetcher';
import { RootState } from '@src/common/redux/store';
import separateClassesByState from '@src/common/utils/separateClassesByState';
import MainPageLayout from '@src/components/global/MainPageLayout';
import MyPageBody from '@src/components/mypage/MyPageBody';
import MyPageHeader from '@src/components/mypage/MyPageHeader';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSelector } from 'react-redux';

const MyPage = () => {
  const { email } = useSelector((store: RootState) => store.userinfo);

  const { data, isLoading, error } = useQuery(['UserInfo'], () => getUserInfo(email));

  const { successClasses, failClasses, ongoingClasses } = separateClassesByState(data?.ownProducts);
  const allClasses = data && [...data.ownProducts].reverse();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{String(error)}</div>;
  }

  return (
    <MainPageLayout>
      <MyPageHeader
        email={email}
        name={data.name}
        profileImage={data.image}
        successClasses={successClasses}
        failClasses={failClasses}
        ongoingClasses={ongoingClasses}
      />
      <MyPageBody classes={allClasses} />
    </MainPageLayout>
  );
};

export default MyPage;

// successClasses={successClasses} failClasses={failClasses} ongoingClasses={ongoingClasses}
