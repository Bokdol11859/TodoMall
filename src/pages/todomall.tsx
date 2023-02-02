import { RootState } from '@src/common/redux/store';
import MainPageLayout from '@src/components/global/MainPageLayout';
import NavBar from '@src/components/todomall/NavBar';
import React from 'react';
import { useSelector } from 'react-redux';

const TodoMall = () => {
  const { category } = useSelector((store: RootState) => store.category);

  return (
    <MainPageLayout>
      <NavBar category={category} />
    </MainPageLayout>
  );
};

export default TodoMall;
