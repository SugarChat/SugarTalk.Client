// @flow
export * from './actionTypes'
export * from './action'
export * from './index'

import { UPDATE_USER_INFO, UPDATE_ACCESS_TOKEN } from './actionTypes';

type State = {
    userInfo: typeof Object,
    accessToken: ''
};

const ThirdPartyFromType = {
    google: 0,
    wechat: 1,
    facebook: 2
};


const DEFAULT_STATE = {
    userInfo: {
        displayName: '',
        email: '',
        id: '',
        picture: '',
        thirdPartyFrom: ThirdPartyFromType.google,
        thirdPartyId: ''
    },

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
            userInfo: action.userInfo
        };
    case UPDATE_ACCESS_TOKEN:
        return {
            ...state,
            accessToken: action.accessToken
        }
    default:
        return state;
    }
};
