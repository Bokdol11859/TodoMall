import { css } from '@emotion/react';
import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import { setActiveTodo } from '@src/common/redux/slices/activeTodoSlice';
import Session from '@src/common/types/Session.type';
import Todo from '@src/common/types/Todo.type';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../global/Button';
import { DetailIcon, TodoCheckBoxIcon } from '../icons/SystemIcons';

const getDDAYStyle = (status: string) => {
  switch (status) {
    case 'FINISH':
      return css`
        background-color: #e1dcfe;
        color: #6b47fd;
      `;
    case 'URGENT':
      return css`
        background-color: #ffc6c6;
        color: #f65050;
      `;
    default:
      return css`
        background-color: #dddddd;
        color: #707070;
      `;
  }
};

const SessionCard = ({
  productId,
  isFail,
  session,
  title,
  isInvisible = false,
}: {
  productId: string;
  isFail: boolean;
  session: Session;
  title: string;
  isInvisible?: boolean;
}) => {
  const [status, setStatus] = useState(isFail);
  const [leftTime, setLeftTime] = useState(1);
  const isRequireAssignment = session.todos.filter((todo: Todo) => !todo.status).length === 0;
  const DDAY = Number(new Date(Date.parse(session.expireDate)).getDate() - new Date().getDate());
  const { push } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    let diff: number = Number(new Date(Date.parse(session.expireDate)).getTime() - new Date().getTime());
    if (diff < 0) {
      setStatus(true);
    } else {
      setTimeout(() => {
        setLeftTime(diff);
      }, 1000);
    }
  }, [status, leftTime]);

  return (
    <Container isInvisible={isInvisible}>
      <SessionDescription>
        <SessionTexts>
          <SessionSubtitle>{title}</SessionSubtitle>
          <SessionTitle>{session.title}</SessionTitle>
        </SessionTexts>
        {!isFail && (
          <SessionDDay status={isRequireAssignment ? 'FINISH' : DDAY - 1 < 1 ? 'URGENT' : ''}>D-{DDAY - 1}</SessionDDay>
        )}
      </SessionDescription>
      <SessionBody>
        {session.todos.map((todo: Todo) => (
          <TodoRow
            onClick={() => {
              dispatch(
                setActiveTodo({
                  productId: productId,
                  sessionId: session.id,
                  todoId: todo.id,
                  title: todo.title,
                  isFinished: todo.status,
                }),
              );
              push(`/todobox/${todo.id}`);
            }}
            key={todo.id}>
            <TodoCheckBoxWrapper>
              <TodoCheckBoxIcon checked={todo.status} />
            </TodoCheckBoxWrapper>
            <TodoTitle checked={todo.status}>{todo.title}</TodoTitle>
            <TodoArrowButtonWrapper>
              <DetailIcon color={todo.status ? COLOR.GRAY200 : COLOR.BLACK} />
            </TodoArrowButtonWrapper>
          </TodoRow>
        ))}
      </SessionBody>
      {isRequireAssignment && (
        <CardFooter>
          <Button variant="Primary" rounder={false} size="Large">
            세션 인증하러 가기
          </Button>
        </CardFooter>
      )}
      {isFail && (
        <CardFooter>
          <Button variant="Error" rounder={false} size="Large">
            도전 삭제하기
          </Button>
        </CardFooter>
      )}
      {isRequireAssignment ? <DdayText>인증 필요</DdayText> : DDAY - 1 < 1 && <DdayTime></DdayTime>}
      {isFail && (
        <ErrorCover>
          <ErrorContainer>
            <ErrorTime>0:00:00:00</ErrorTime>
            <ErrorTag>데드라인 만료</ErrorTag>
          </ErrorContainer>
        </ErrorCover>
      )}
    </Container>
  );
};

const ErrorCover = styled.div`
  position: absolute;
  width: 100%;
  height: 55%;
  top: 3.5rem;
  background-color: white;
  border-radius: 1rem;
  opacity: 95%;
  pointer-events: none;
`;

const ErrorContainer = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

const ErrorTime = styled.div`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${COLOR.ERROR500};
`;

const ErrorTag = styled.div`
  padding: 0.1rem 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc6c6;
  color: ${COLOR.ERROR500};
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Container = styled.div<{ isInvisible: boolean }>`
  position: relative;
  width: 100%;
  max-width: 380px;
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${COLOR.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: ${(props) => (props.isInvisible ? 0 : 1)};
  pointer-events: ${(props) => (props.isInvisible ? 'none' : 'auto')};
`;

const SessionDescription = styled.div`
  display: flex;
  width: 100%;
`;

const SessionTexts = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-direction: column;
`;

const SessionSubtitle = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${COLOR.GRAY400};
  margin: 0;
`;

const SessionTitle = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${COLOR.GRAY600};
  margin: 0;
`;

const SessionDDay = styled.div<{ status: string }>`
  height: 1.5rem;
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  ${(props) => getDDAYStyle(props.status)}
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: auto;
`;

const SessionBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TodoRow = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
`;

const TodoTitle = styled.div<{ checked: boolean }>`
  flex-grow: 1;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${(props) => (props.checked ? COLOR.GRAY400 : COLOR.PURPLE400)};
`;

const TodoArrowButtonWrapper = styled.div``;

const DdayText = styled.p`
  margin: 0;
  position: absolute;
  top: 0.6rem;
  right: 1.1rem;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 1rem;
  color: ${COLOR.PURPLE500};
`;

const DdayTime = styled.p`
  margin: 0;
  position: absolute;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

export default SessionCard;
