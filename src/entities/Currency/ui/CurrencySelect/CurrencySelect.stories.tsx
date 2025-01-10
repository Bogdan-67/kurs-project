import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Default: Story = {
    args: {},
    decorators: [CenterDecorator],
};
