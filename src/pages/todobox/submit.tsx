import { RootState } from '@src/common/redux/store';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import AWS from 'aws-sdk';
import styled from '@emotion/styled';
import { Header } from '@src/components/global/Header';
import COLOR from '@src/common/constants/Colors';
import Button from '@src/components/global/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadImage } from '@src/common/api/fetcher';
import { compressImage } from '@src/common/utils/compressImage';
import { useRouter } from 'next/router';

const region = 'ap-northeast-2';
const bucket = 'todomall-assignment-images';

AWS.config.update({
  region: region,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
});

const Submit = () => {
  const { userid } = useSelector((store: RootState) => store.userinfo);
  const { productId, sessionId, sessionTitle } = useSelector((store: RootState) => store.activeTodo);
  const [image, setImage] = useState('');
  const inputRef = useRef(null);
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const TodoSubmitMutation = useMutation({
    mutationFn: (imageUrl: string) =>
      uploadImage({
        userId: userid,
        productId,
        sessionId,
        missionImage: imageUrl,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      push('/todobox/success');
    },
  });

  const handleImageUpload = async (e: any) => {
    let compressedImage = await compressImage(e.target.files[0], {
      quality: 0.1,
      type: 'image/jpeg',
    });
    console.log(compressedImage);
    console.log(e.target.files[0]);
    // setImage(e.target.files[0]);
    //@ts-ignore
    setImage(compressedImage);
  };

  const handleClick = async () => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: bucket,
        Key:
          `todomall_test/${sessionTitle}/` +
          `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}-${new Date().getHours()}:${new Date().getMinutes()}` +
          '.jpeg',
        Body: image,
      },
    });
    upload.promise().then((res: any) => {
      console.log(res.Location);
      TodoSubmitMutation.mutate(res.Location);
    });
  };

  const onUploadImageButtonClick = () => {
    if (!inputRef.current) {
      return;
    }
    //@ts-ignore
    inputRef.current.click();
  };

  useEffect(() => {
    preview();
  }, [image]);

  const preview = () => {
    if (!image) return false;

    const imgEL = document.querySelector('.img__box');
    const reader = new FileReader();
    if (imgEL) {
      //@ts-ignore
      reader.onload = () => (imgEL.style.backgroundImage = `url(${reader.result})`);
      //@ts-ignore
      reader.readAsDataURL(image);
    }
  };

  return (
    <Container>
      <Header isBack text="인증하기" />
      <Wrapper>
        <AssignmentTitle>세션 인증을 위해</AssignmentTitle>
        <AssignmentTitle>
          <span>{sessionTitle}</span> 사진을 준비해주세요
        </AssignmentTitle>
        <TodoSubmitBody>
          {image ? (
            <TodoSubmitImage className="img__box" />
          ) : (
            <TodoSubmitContainer onClick={onUploadImageButtonClick}>
              <TodoSubmitLogo src="/images/todo_submit_camera.svg" />
              <input
                ref={inputRef}
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </TodoSubmitContainer>
          )}
        </TodoSubmitBody>
        <TodoSubmitFooter>
          <Button
            isLoading={TodoSubmitMutation.isLoading}
            onClick={handleClick}
            variant="Primary"
            size="Large"
            rounder={false}>
            인증 제출하기
          </Button>
        </TodoSubmitFooter>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
`;

const AssignmentTitle = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2rem;

  margin: 0;
  span {
    color: ${COLOR.PURPLE500};
  }
`;

const TodoSubmitBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const TodoSubmitImage = styled.div`
  width: 80%;
  max-width: 450px;
  height: 80%;
  max-height: 450px;
  background-size: cover;
  border-radius: 1rem;
  background-position: center center;
`;

const TodoSubmitContainer = styled.div`
  width: 80%;
  max-width: 450px;
  height: 80%;
  max-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
  border-radius: 1rem;
  z-index: 1;
`;

const TodoSubmitLogo = styled.img`
  z-index: 10000;
`;

const TodoSubmitFooter = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Submit;
