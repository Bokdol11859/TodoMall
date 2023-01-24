import React from 'react';
import { Meta, Story } from '@storybook/react';
import GNB from './GNB';

const meta: Meta = {
  title: 'GNB',
  component: GNB,
};

export default meta;

const Template: Story = () => <GNB />;

export const TodoBox = Template.bind({});

TodoBox.parameters = {
  nextRouter: {
    pathname: '/todobox',
  },
};

export const TodoMall = Template.bind({});

TodoMall.parameters = {
  nextRouter: {
    pathname: '/todomall',
  },
};

export const Mypage = Template.bind({});

Mypage.parameters = {
  nextRouter: {
    pathname: '/mypage',
  },
};
