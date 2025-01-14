import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/Profile';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

const data = {
    first: 'Bogdan',
    lastname: 'Tugay',
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                first: '',
            },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ first: '1234' }),
            ),
        ).toEqual({
            form: { first: '1234' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data,
            form: data,
        });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
            data,
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
});
