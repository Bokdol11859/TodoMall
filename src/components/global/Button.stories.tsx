import React from 'react';
import { ComponentMeta, Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Buttons',
  component: Button,
  argTypes: {
    variant: {
      name: 'Button Type',
      type: { name: 'string', required: true },
      description: 'variant color',
      control: 'radio',
      options: ['Primary', 'Error', 'Success', 'Information', 'Warning', 'Bordered', 'Canceled', 'Disabled'],
    },
    size: {
      name: 'Button Size',
      type: { name: 'string', required: true },
      description: 'size',
      control: 'radio',
      options: ['Small', 'Large'],
    },
    rounder: {
      name: 'Button Border Rounder',
      type: { name: 'boolean', required: true },
      description: 'rounder',
      control: 'radio',
      options: [true, false],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args}>모범예시 보러가기</Button>;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'Primary',
  size: 'Large',
  rounder: false,
};

export const Error = Template.bind({});

Error.args = {
  variant: 'Error',
  size: 'Large',
  rounder: false,
};

export const Success = Template.bind({});

Success.args = {
  variant: 'Success',
  size: 'Large',
  rounder: false,
};

export const Information = Template.bind({});

Information.args = {
  variant: 'Information',
  size: 'Large',
  rounder: false,
};

export const Warning = Template.bind({});

Warning.args = {
  variant: 'Warning',
  size: 'Large',
  rounder: false,
};

export const Bordered = Template.bind({});

Bordered.args = {
  variant: 'Bordered',
  size: 'Large',
  rounder: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: 'Disabled',
  size: 'Large',
  rounder: false,
};

export const Cancel = Template.bind({});

Cancel.args = {
  variant: 'Canceled',
  size: 'Large',
  rounder: false,
};
