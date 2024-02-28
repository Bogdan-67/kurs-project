import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

import type { Decorator } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => {
    return (StoryComponent) => (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    );
};
