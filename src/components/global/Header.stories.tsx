import React from 'react';
import { ComponentMeta, Meta, Story } from '@storybook/react';
import { Header, HeaderProps } from './Header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    text: {
      name: 'Header Title',
      type: { name: 'string', required: true },
    },
    isBack: {
      type: { name: 'boolean', required: true },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});

MainHeader.args = {
  text: '회원가입',
  isBack: false,
};
