import React, { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary';
import { PageError } from 'widgets/PageError';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />

                    {inited && (
                        <ErrorBoundary fallback={<PageError />}>
                            <AppRouter />
                        </ErrorBoundary>
                    )}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
