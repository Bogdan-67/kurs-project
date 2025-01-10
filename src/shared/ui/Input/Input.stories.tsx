import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import 'app/styles/index.scss';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Empty: Story = {
    args: {
        placeholder: 'Введите текст',
        value: '',
        onChange: (value) => {},
    },
    decorators: [CenterDecorator],
};

export const Filled: Story = {
    args: {
        placeholder: 'Введите текст',
        value: '1234',
        onChange: (value) => {},
    },
    decorators: [CenterDecorator],
};

export const ReadOnly: Story = {
    args: {
        placeholder: 'Введите текст',
        value: '1234',
        onChange: (value) => {},
        readonly: true,
    },
    decorators: [CenterDecorator],
};

export const Dark: Story = {
    args: {
        placeholder: 'Введите текст',
        value: '',
        onChange: (value) => {},
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};
