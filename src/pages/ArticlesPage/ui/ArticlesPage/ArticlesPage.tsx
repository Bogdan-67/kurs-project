import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';
import { memo } from 'react';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classnames(cls.articlesPage, className)}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(ArticlesPage);
