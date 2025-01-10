import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import { CountrySelect } from 'entities/Country';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
    args: {},
    decorators: [CenterDecorator],
};
