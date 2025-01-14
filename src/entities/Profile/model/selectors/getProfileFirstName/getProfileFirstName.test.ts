import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName.test', () => {
    test('should return first name', () => {
        const data = {
            first: 'Bogdan',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileFirstName(state as StateSchema)).toEqual('Bogdan');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstName(state as StateSchema)).toEqual('');
    });
});
