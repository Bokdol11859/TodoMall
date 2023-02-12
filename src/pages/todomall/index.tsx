import styled from '@emotion/styled';
import { getTodoMallList } from '@src/common/api/fetcher';
import COLOR from '@src/common/constants/Colors';
import { RootState } from '@src/common/redux/store';
import MainPageLayout from '@src/components/global/MainPageLayout';
import NavBar from '@src/components/todomall/NavBar';
import ProductList from '@src/components/todomall/ProductList';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

const TodoMall = () => {
  const { category } = useSelector((store: RootState) => store.category);

  const TodoMallQuery = useQuery(['TodoMall', category], () => getTodoMallList(category));

  console.log(TodoMallQuery?.data);

  return (
    <MainPageLayout>
      <NavBar category={category} />
      <CategoryDisplay>
        <CategoryTitle src={`/assets/${category}_title.svg`} alt={category} width={300} height={100} />
        <CategoryImage src={`/assets/${category}_image.svg`} alt={category} width={360} height={300} />
      </CategoryDisplay>
      <ProductList productList={TodoMallQuery?.data} />
    </MainPageLayout>
  );
};

const CategoryDisplay = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 6rem;
  background-color: ${COLOR.BACKGROUND100};
`;

const CategoryTitle = styled(Image)``;

const CategoryImage = styled(Image)``;

export default TodoMall;
