import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { Profile, ProfileSchema } from '../types/Profile';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
        setReadonly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfile: (
            state: ProfileSchema,
            action: PayloadAction<Profile>,
        ) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancelEdit: (state: ProfileSchema) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state, action) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                    state.readonly = true;
                },
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } =
    ProfileSlice;
