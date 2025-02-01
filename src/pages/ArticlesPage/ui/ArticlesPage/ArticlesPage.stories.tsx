import type { Meta, StoryObj } from '@storybook/react';

import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import ArticlesPage from './ArticlesPage';
import 'app/styles/index.scss';

const meta: Meta<typeof ArticlesPage> = {
    title: 'shared/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
    args: {},
    decorators: [CenterDecorator],
};
