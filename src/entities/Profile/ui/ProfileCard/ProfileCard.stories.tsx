import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
import cls from './ProfileCard.module.scss';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        className: cls.storybook,
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            first: 'Bogdan',
            lastname: 'Tugay',
            age: 22,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
            avatar,
        },
    },
    decorators: [CenterDecorator],
};

export const WithError: Story = {
    args: {
        error: 'true',
    },
    decorators: [CenterDecorator],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [CenterDecorator],
};
