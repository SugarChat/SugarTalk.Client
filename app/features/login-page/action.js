import { UPDATE_ACCESS_TOKEN, UPDATE_USER_INFO } from './actionTypes';
export const updateUserInfo = userInfo => {
    return {
        type: UPDATE_USER_INFO,
        userInfo
    };
};

export const updateAccessToken = accessToken => {
    return {
        type: UPDATE_ACCESS_TOKEN,
        accessToken
    };
};
