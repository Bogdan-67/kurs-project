import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    },
};

export const Primary: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.PRIMARY,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
