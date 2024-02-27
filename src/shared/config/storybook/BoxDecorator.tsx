import { Decorator } from '@storybook/react';

export const BoxDecorator = (width: number): Decorator => {
    return (Story) => {
        return (
            <div style={{ width }}>
                <Story />
            </div>
        );
    };
};
