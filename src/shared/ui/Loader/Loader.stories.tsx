import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import { Loader, LoaderSize, LoaderTheme } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [CenterDecorator],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Primary: Story = {
    args: {
        theme: LoaderTheme.PRIMARY,
    },
};

export const SizeS: Story = {
    args: {
        size: LoaderSize.S,
    },
};

export const SizeM: Story = {
    args: {
        size: LoaderSize.M,
    },
};

export const SizeL: Story = {
    args: {
        size: LoaderSize.L,
    },
};

export const SizeXL: Story = {
    args: {
        size: LoaderSize.XL,
    },
};
