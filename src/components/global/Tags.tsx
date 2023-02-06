import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import React from 'react';

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <TagsList>
      {tags?.map((tag: string) => (
        <Tag>{tag}</Tag>
      ))}
    </TagsList>
  );
};

const TagsList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  height: 1.5rem;
  background-color: ${COLOR.GRAY50};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 0.5rem;

  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.3rem;

  color: ${COLOR.GRAY400};
`;

export default Tags;
