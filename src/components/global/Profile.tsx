import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import Image from 'next/image';
import React, { ReactNode } from 'react';

const Profile = ({ image, children, isSmall = false }: { image: string; children?: ReactNode; isSmall?: boolean }) => {
  return (
    <ImageWrapper>
      <ProfileImage width={isSmall ? 48 : 64} height={isSmall ? 48 : 64} alt="Profile Picture" src={image} />
      {children}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  border: 3px solid ${COLOR.PURPLE500};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled(Image)`
  border-radius: 100%;
`;

export default Profile;
