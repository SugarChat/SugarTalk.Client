// @flow
export * from './actionTypes'
export * from './action'
export * from './index'

import { UPDATE_USER_INFO, ACCESS_TOKEN } from './actionTypes';

type State = {
    userInfo: typeof Object,
    accessToken: ''
};

const DEFAULT_STATE = {
    userInfo: Object,
    accessToken: ''
};

/**
 * Reduces redux actions for features/settings.
 *
 * @param {State} state - Current reduced redux state.
 * @param {Object} action - Action which was dispatched.
 * @returns {State} - Updated reduced redux state.
 */
export default (state: State = DEFAULT_STATE, action: Object) => {
    switch (action.type) {
    case UPDATE_USER_INFO:
        return {
            ...state,
            userInfo: action.updateUserInfo
        };
    case ACCESS_TOKEN: 
    return {
        ...state,
        accessToken: action.accessToken
    }
    default:
        return state;
    }
};
