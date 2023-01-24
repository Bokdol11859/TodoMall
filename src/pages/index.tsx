import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import SOCIAL from '@src/common/constants/Social';
import { toggleSplash } from '@src/common/redux/slices/splashSlice';
import { RootState } from '@src/common/redux/store';
import { AppleLogin, KakaoLogin } from '@src/components/icons/SocialLoginIcons';
import SplashScreen from '@src/components/login/SplashScreen';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useRouter();

  const { isInitial } = useSelector((store: RootState) => store.splash);
  const dispatch = useDispatch();

  const handleLogin = (path: string) => {
    push(path);
  };

  useEffect(() => {
    const splash = setTimeout(() => {
      setIsLoading(false);
      dispatch(toggleSplash());
    }, 2000);

    return () => {
      clearTimeout(splash);
    };
  }, []);

  if (isInitial && isLoading) {
    return <SplashScreen />;
  }

  return (
    <Container initial={{ y: 200, opacity: 0 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1, y: 0 }}>
      <Logo alt="TodoMall" src="/assets/LoginLogo.png" width={200} height={60} />
      <LoginButtons>
        <KakaoLogin
          onClick={() => {
            handleLogin(SOCIAL.KAKAO_PATH);
          }}
        />
        <AppleLogin
          onClick={() => {
            push('signup');
          }}
        />
        <TextButtons>
          <TextButton href="/todobox">게스트로 둘러보기</TextButton>
          <TextButton href="/terms/personal">개인정보처리방침</TextButton>
          <TextButton href="/terms/service">서비스 이용약관</TextButton>
        </TextButtons>
        <CompanyButton onClick={() => {}}>c. myplanit</CompanyButton>
      </LoginButtons>
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-image: url('/assets/LoginBackground.png');
  background-size: auto 38rem;
  background-position: bottom;
  background-repeat: no-repeat;
`;

const Logo = styled(Image)`
  position: absolute;
  bottom: 36rem;
`;

const LoginButtons = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  gap: 1rem;
  padding-bottom: 1rem;
`;

const TextButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

const TextButton = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${COLOR.GRAY600};
`;

const CompanyButton = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${COLOR.GRAY600};
`;
