import styled from '@emotion/styled';
import { finishTodo, getTodoDetail } from '@src/common/api/fetcher';
import COLOR from '@src/common/constants/Colors';
import { RootState } from '@src/common/redux/store';
import Button from '@src/components/global/Button';
import { Header } from '@src/components/global/Header';
import { CheckBoxIcon } from '@src/components/icons/SystemIcons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TodoDetail = () => {
  const [width, setWidth] = useState(0);
  const [isTaskFinished, setIsTaskFinished] = useState(false);
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const { todoId, sessionId, productId, title, isFinished } = useSelector((store: RootState) => store.activeTodo);
  const { userid } = useSelector((store: RootState) => store.userinfo);
  const TodoQuery = useQuery(['Todo', todoId], () => getTodoDetail(todoId));
  const TodoMutation = useMutation({
    mutationFn: () => finishTodo({ todoId, sessionId, productId, userId: userid }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['UserInfo'] });
      push('/todobox');
    },
  });

  const handleClick = async () => {
    TodoMutation.mutate();
  };

  const handleScroll = (e: any) => {
    setWidth(e.target.scrollTop / (e.target.scrollHeight - e.target.offsetHeight));
  };

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll, { capture: true });
    return () => {
      document.body.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, []);

  if (TodoQuery.isLoading) {
    return <div>{}</div>;
  }

  return (
    <Container>
      <Header isBack text={title} />
      <ProgressBar progress={width} />
      <HTMLDiv dangerouslySetInnerHTML={{ __html: TodoQuery.data.body }} />
      {/* <AnswerContainer>
        <AnswerText>지금까지 과정을 잘 따랐는지 알고싶다면?</AnswerText>
        <Button variant="Bordered" size="Small" rounder>
          모범예시 보러가기
        </Button>
      </AnswerContainer> */}
      <TaskContainer>
        <TaskTitle>태스크 완료하기</TaskTitle>
        <TaskSubtitle>아래 활동을 완료했다면 눌러서 수행하세요.</TaskSubtitle>
        <TaskBox
          onClick={() => {
            setIsTaskFinished(!isTaskFinished);
          }}>
          <TaskCheckBoxWrapper>
            <CheckBoxIcon isActive={isFinished || isTaskFinished} />
          </TaskCheckBoxWrapper>
          <TaskName>{TodoQuery.data.taskTitle}</TaskName>
        </TaskBox>
      </TaskContainer>
      <Footer>
        <Button
          variant={isFinished ? 'Disabled' : isTaskFinished ? 'Primary' : 'Disabled'}
          size="Large"
          rounder={false}
          onClick={handleClick}>
          {isFinished ? '이미 완료한 투두입니다' : '투두 완료하기'}
        </Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: ${COLOR.BACKGROUND50};
`;

const ProgressBar = styled.div<{ progress: number }>`
  position: absolute;
  top: 3rem;
  background-color: ${COLOR.PURPLE500};
  width: 100%;
  height: 2px;
  transform: scaleX(${(props) => props.progress});
  transform-origin: center left;
  // width: ${(props) => props.progress * 100}%;
  // height: 2px;
`;

const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const AnswerText = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 0.9rem;
  color: ${COLOR.PURPLE300};
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const TaskTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2rem;
`;

const TaskSubtitle = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const TaskBox = styled.div`
  width: 100%;
  padding: 0.3rem;
  margin-top: 1.5rem;
  display: flex;
  align-content: center;
  justify-content: center;
  background: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY50};
  border-radius: 1.5rem;
`;

const TaskCheckBoxWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
`;

const TaskName = styled.div`
  margin: 0;
  width: 100%;
  flex-grow: 1;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const HTMLDiv = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  * {
    padding: 0.5rem;
    width: 100%;
  }
  h1 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
    color: ${COLOR.BLACK};
  }
  a {
    width: 10rem;
    color: ${COLOR.PURPLE500};
    text-align: center;
    border: 1px solid ${COLOR.PURPLE500};
    border-radius: 1.25rem;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    text-align: center;
    margin-bottom: 1.25rem !important;
    text-decoration: none;
  }
  ol,
  ul {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${COLOR.GRAY400};
    padding: 0.5rem;
  }
  li {
    padding-bottom: 2px !important;
    padding-top: 2px !important;
  }
  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${COLOR.GRAY400};
    margin-top: 10px;
  }
  img {
    width: 100%;
    padding: 0px;
  }
`;

export default TodoDetail;
