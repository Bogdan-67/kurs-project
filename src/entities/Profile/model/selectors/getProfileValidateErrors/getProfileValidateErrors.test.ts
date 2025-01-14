import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/Profile';

describe('getProfileValidateErrors.test', () => {
    test('should return data', () => {
        const validateErrors = [
            ValidateProfileError.NO_DATA,
            ValidateProfileError.SERVER_ERROR,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            validateErrors,
        );
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
