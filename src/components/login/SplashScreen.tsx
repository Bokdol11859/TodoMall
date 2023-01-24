import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import SplashLogo from 'public/assets/SplashLogo.png';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = () => {
  return (
    <Wrapper>
      <AnimatePresence>
        <motion.div
          key="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.1, times: [0, 0.2, 0.8, 1] }}>
          <Image alt="logo" src={SplashLogo} width={205} height={60} />
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SplashScreen;
