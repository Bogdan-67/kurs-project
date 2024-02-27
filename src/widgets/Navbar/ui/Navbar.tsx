import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { PageError } from 'widgets/PageError';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary';
import { LoginModal } from 'widgets/LoginModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <ErrorBoundary fallback={<PageError />}>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </ErrorBoundary>
        </div>
    );
};
