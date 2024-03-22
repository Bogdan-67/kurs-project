import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ButtonTheme.PRIMARY} onClick={reloadPage}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
});
