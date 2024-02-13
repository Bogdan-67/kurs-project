import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <Button data-testid="increment-btn" square onClick={increment}>
                {t('+')}
            </Button>
            <Button data-testid="decrement-btn" square onClick={decrement}>
                {t('-')}
            </Button>
        </div>
    );
};
