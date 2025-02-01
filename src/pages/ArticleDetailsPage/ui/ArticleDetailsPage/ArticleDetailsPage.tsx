import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classnames(cls.articleDetailsPage, className)}>
            ARTICLE DETAILS
        </div>
    );
};

export default memo(ArticleDetailsPage);
