import { ACCESS_TOKEN, UPDATE_USER_INFO } from './actionTypes'

export const updateUserInfo = (userInfo) => {
    return {
        tyep: UPDATE_USER_INFO,
        userInfo
    }
}

export const accessToken =(accessToken) => {
    return {
        type: ACCESS_TOKEN,
        accessToken
    }
}
