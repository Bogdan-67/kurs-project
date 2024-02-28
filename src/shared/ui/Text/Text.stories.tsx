import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import 'app/styles/index.scss';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    decorators: [CenterDecorator],
};

export const DefaultDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
    decorators: [CenterDecorator],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    decorators: [CenterDecorator],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        theme: TextTheme.ERROR,
    },
    decorators: [CenterDecorator],
};

export const ErrorDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        theme: TextTheme.ERROR,
    },
    decorators: [CenterDecorator, ThemeDecorator(Theme.DARK)],
};
