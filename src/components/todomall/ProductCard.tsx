import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({
  subtitle,
  title,
  description,
  icon,
  tags,
}: {
  subtitle: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}) => {
  return (
    <Container>
      <Icon src={icon} alt={'title'} width={40} height={40} />
      <SubTitle>{subtitle}를 위한</SubTitle>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag: string) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${COLOR.WHITE};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 0.25rem;
`;

const Icon = styled(Image)`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`;

const SubTitle = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${COLOR.GRAY400};
  margin: 0;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 0;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.25rem;
  color: ${COLOR.GRAY600};
  margin: 0;
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.25rem;
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

export default ProductCard;
