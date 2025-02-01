import type { Meta, StoryObj } from '@storybook/react';

import { CenterDecorator } from 'shared/config/storybook/CenterDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';
import 'app/styles/index.scss';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'shared/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Normal: Story = {
    args: {},
    decorators: [CenterDecorator],
};
