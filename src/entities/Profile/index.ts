export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { fetchProfileData } from './model/service/fetchProfileData/fetchProfileData';
export { updateProfileData } from 'entities/Profile/model/service/updateProfileData/updateProfileData';

export { Profile, ProfileSchema } from './model/types/Profile';
export { profileActions, profileReducer } from './model/slice/profileSlice';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
