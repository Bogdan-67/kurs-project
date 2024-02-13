import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';
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
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE_INVERTED,
    },
};

export const Primary: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
    },
};

export const Background: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const SizeM: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        size: ButtonSize.M,
    },
};

export const SizeL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        size: ButtonSize.L,
    },
};

export const SizeXL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        size: ButtonSize.XL,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareDark: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
