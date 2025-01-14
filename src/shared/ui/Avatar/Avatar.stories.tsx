import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImg from '../../assets/tests/storybook.jpg';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        src: AvatarImg,
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Size300: Story = {
    args: {
        size: 300,
    },
    decorators: [CenterDecorator],
};

export const Size150: Story = {
    args: {
        size: 150,
    },
    decorators: [CenterDecorator],
};

export const Size50: Story = {
    args: {
        size: 50,
    },
    decorators: [CenterDecorator],
};
