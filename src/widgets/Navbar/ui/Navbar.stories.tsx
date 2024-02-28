import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LightIsAuth: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {},
            },
        }),
    ],
};

export const DarkIsAuth: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {},
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const LightNotAuth: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};

export const DarkNotAuth: Story = {
    args: {},
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
