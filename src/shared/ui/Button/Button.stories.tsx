import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
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
    decorators: [CenterDecorator],
};

export const ClearInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
    decorators: [CenterDecorator],
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [CenterDecorator],
};

export const OutlineInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE_INVERTED,
    },
    decorators: [CenterDecorator],
};

export const Primary: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
    },
    decorators: [CenterDecorator],
};

export const Background: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [CenterDecorator],
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [CenterDecorator],
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
    decorators: [CenterDecorator],
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
    decorators: [CenterDecorator],
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
    decorators: [CenterDecorator],
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [CenterDecorator],
};

export const SizeM: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        size: ButtonSize.M,
    },
    decorators: [CenterDecorator],
};

export const SizeL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        size: ButtonSize.L,
    },
    decorators: [CenterDecorator],
};

export const SizeXL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        size: ButtonSize.XL,
    },
    decorators: [CenterDecorator],
};

export const ClearDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const PrimaryDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const BackgroundDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const SquareDark: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        disabled: true,
    },
    decorators: [CenterDecorator],
};

export const DisabledDark: Story = {
    args: {
        children: 'Button',
        disabled: true,
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
    args: {
        children: 'Button',
        loading: true,
        theme: ButtonTheme.PRIMARY,
    },
    decorators: [CenterDecorator],
};

export const LoadingOutline: Story = {
    args: {
        children: 'Button',
        loading: true,
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [CenterDecorator],
};

export const LoadingDark: Story = {
    args: {
        children: 'Button',
        loading: true,
        theme: ButtonTheme.PRIMARY,
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};
