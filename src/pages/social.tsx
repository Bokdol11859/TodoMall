import { AxiosInstance } from '@src/common/api/axios';
import { setUserInfo } from '@src/common/redux/slices/userInfoSlice';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Social = () => {
  const { query, isReady, push } = useRouter();

  const dispatch = useDispatch();

  const getAuthInfo = async () => {
    const kakao_response = await AxiosInstance.post(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${query.code}`,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    );
    const kakao_user_info = await AxiosInstance.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${kakao_response.data.access_token}`,
      },
    });

    let image_url = kakao_user_info.data.kakao_account.profile.profile_image_url.replace('http', 'https');
    let email = kakao_user_info.data.kakao_account.email;

    try {
      const user_info = await AxiosInstance.post(`${process.env.NEXT_PUBLIC_TODO_MALL_API_ENDPOINT}user`, {
        email: kakao_user_info.data.kakao_account.email,
        image: image_url,
        name: kakao_user_info.data.kakao_account.profile.nickname,
      });

      dispatch(setUserInfo({ userid: user_info.data.id, email: kakao_user_info.data.kakao_account.email }));

      if (localStorage.getItem('personal') && localStorage.getItem('service')) {
        push('/todobox');
      } else {
        push('/signup');
      }
    } catch {
      const user_info = await AxiosInstance.get(`${process.env.NEXT_PUBLIC_TODO_MALL_API_ENDPOINT}user?email=${email}`);

      dispatch(setUserInfo({ userid: user_info.data.id, email: kakao_user_info.data.kakao_account.email }));

      push('/todobox');
    }
  };

  useEffect(() => {
    if (isReady) {
      getAuthInfo();
    }
  }, [query, isReady, push]);
  return <></>;
};

export default Social;
