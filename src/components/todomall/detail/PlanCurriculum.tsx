import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import Divider from '@src/components/global/Divider';
import React from 'react';

const PlanCurriculum = ({ data }: any) => {
  return (
    <Container>
      <FirstTitle>커리큘럼</FirstTitle>
      {data?.map((session: any, i: number) => (
        <>
          <SessionCount>Session {i + 1}</SessionCount>
          <Title>{session.title}</Title>
          <Assignment>
            <AssignmentImage src={`/images/assignment_icon.svg`} />
            <AssignmentTitle>{session.missionTitle}</AssignmentTitle>
          </Assignment>
          <Todos>
            {session.todos.map((todo: any, i: number) => (
              <Todo>
                <TodoTitle>{todo.title}</TodoTitle>
              </Todo>
            ))}
          </Todos>
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
`;

const FirstTitle = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const SessionCount = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  color: ${COLOR.GRAY400};
  margin-bottom: 1rem;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1rem;
  margin-bottom: 1.25rem;
`;

const Assignment = styled.div`
  background: #fff2e2;
  border-radius: 0.5rem;
  height: 3rem;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const AssignmentImage = styled.img`
  margin-left: 1.25rem;
`;

const AssignmentTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  color: #ff9900;
  margin-left: 1rem;
`;

const Todos = styled.div`
  margin: 0.5rem 0;
`;

const Todo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TodoTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
`;

export default PlanCurriculum;
