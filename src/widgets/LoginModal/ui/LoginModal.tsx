import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary';
import { PageError } from 'widgets/PageError';
import { LoginForm } from 'features/AuthByUsername';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            className={classNames(cls.loginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <ErrorBoundary fallback={<PageError />}>
                <LoginForm />
            </ErrorBoundary>
        </Modal>
    );
};
