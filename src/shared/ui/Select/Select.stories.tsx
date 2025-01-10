import type { Meta, StoryObj } from '@storybook/react';
import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import { Select } from 'shared/ui/Select/Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: 'Select',
        options: [
            { label: 'Первый пункт', value: '1' },
            { label: 'Второй пункт', value: '2' },
        ],
    },
    decorators: [CenterDecorator],
};
