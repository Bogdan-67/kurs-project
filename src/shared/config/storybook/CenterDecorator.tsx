import { Decorator } from '@storybook/react';

export const CenterDecorator: Decorator = (Story) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Story />
        </div>
    );
};
