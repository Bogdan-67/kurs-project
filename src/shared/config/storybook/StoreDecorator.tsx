import { StoreProvider } from 'app/providers/StoreProvider';

import type { Decorator } from '@storybook/react';

export const StoreDecorator: Decorator = (StoryComponent) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);
