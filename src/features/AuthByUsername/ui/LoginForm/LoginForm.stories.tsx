import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Empty: Story = {
    args: {},
    decorators: [
        CenterDecorator,
        StoreDecorator({ loginForm: { username: '', password: '' } }),
    ],
};

export const EmptyDark: Story = {
    args: {},
    decorators: [
        CenterDecorator,
        StoreDecorator({ loginForm: { username: '', password: '' } }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const Filled: Story = {
    args: {},
    decorators: [
        CenterDecorator,
        StoreDecorator({ loginForm: { username: 'admin', password: '1234' } }),
    ],
};

export const FilledDark: Story = {
    args: {},
    decorators: [
        CenterDecorator,
        StoreDecorator({ loginForm: { username: 'admin', password: '1234' } }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        CenterDecorator,
        StoreDecorator({
            loginForm: { username: 'admin', password: '1234', isLoading: true },
        }),
    ],
};

export const LoadingDark: Story = {
    args: {},
    decorators: [
        CenterDecorator,
        StoreDecorator({
            loginForm: { username: 'admin', password: '1234', isLoading: true },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        CenterDecorator,
        StoreDecorator({
            loginForm: { username: 'admin', password: '1234', error: 'error' },
        }),
    ],
};

export const ErrorDark: Story = {
    args: {},
    decorators: [
        CenterDecorator,
        StoreDecorator({
            loginForm: { username: 'admin', password: '1234', error: 'error' },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};
