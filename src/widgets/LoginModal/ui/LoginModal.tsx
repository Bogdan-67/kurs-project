import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary';
import { PageError } from 'widgets/PageError';
import { LoginForm } from 'features/AuthByUsername';
import { memo, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = memo(
    ({ className, isOpen, onClose }: LoginModalProps) => {
        return (
            <Modal
                className={classNames('', {}, [className])}
                isOpen={isOpen}
                onClose={onClose}
                lazy
            >
                <ErrorBoundary fallback={<PageError />}>
                    <Suspense fallback={<Loader />}>
                        <LoginForm onSuccess={onClose} />
                    </Suspense>
                </ErrorBoundary>
            </Modal>
        );
    },
);
