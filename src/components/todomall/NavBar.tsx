import styled from '@emotion/styled';
import CATEGORY from '@src/common/constants/Category';
import COLOR from '@src/common/constants/Colors';
import { setCategory } from '@src/common/redux/slices/categorySlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CareerIcon, InvestmentIcon, SelfIcon } from '../icons/CategoryIcons';

const NavBar = ({ category }: { category: string }) => {
  const checkActiveCategory = (path: string) => {
    return category === path;
  };

  const dispatch = useDispatch();

  return (
    <Container>
      <Column
        onClick={() => {
          dispatch(setCategory({ category: CATEGORY.CAREER }));
        }}>
        <CareerIcon isActive={checkActiveCategory(CATEGORY.CAREER)} />
        <ColumnTitle isActive={checkActiveCategory(CATEGORY.CAREER)}>직무 개발</ColumnTitle>
        <ActiveBorder isActive={checkActiveCategory(CATEGORY.CAREER)} />
      </Column>
      <Column
        onClick={() => {
          dispatch(setCategory({ category: CATEGORY.SELF }));
        }}>
        <SelfIcon isActive={checkActiveCategory(CATEGORY.SELF)} />
        <ColumnTitle isActive={checkActiveCategory(CATEGORY.SELF)}>자기 계발</ColumnTitle>
        <ActiveBorder isActive={checkActiveCategory(CATEGORY.SELF)} />
      </Column>
      <Column
        onClick={() => {
          dispatch(setCategory({ category: CATEGORY.INVESTMENT }));
        }}>
        <InvestmentIcon isActive={checkActiveCategory(CATEGORY.INVESTMENT)} />
        <ColumnTitle isActive={checkActiveCategory(CATEGORY.INVESTMENT)}>재테크</ColumnTitle>
        <ActiveBorder isActive={checkActiveCategory(CATEGORY.INVESTMENT)} />
      </Column>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  margin-top: 3rem;
  background-color: ${COLOR.BACKGROUND50};
  border-bottom: 1.5px solid ${COLOR.GRAY50};
  position: absolute;
  z-index: 100000;
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ActiveBorder = styled.div<{ isActive: boolean }>`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2.5px;
  background-color: ${(props) => (props.isActive ? COLOR.GRAY600 : COLOR.GRAY200)};
`;

const ColumnTitle = styled.p<{ isActive: boolean }>`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  color: ${(props) => (props.isActive ? COLOR.GRAY600 : COLOR.GRAY200)};
`;

export default NavBar;
