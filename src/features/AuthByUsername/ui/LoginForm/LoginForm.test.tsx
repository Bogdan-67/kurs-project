import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm.test', () => {
    test('render', () => {
        componentRender(<LoginForm />);
        expect(screen.getByTestId('loginForm')).toBeInTheDocument();
    });
});
