// @flow

import { combineReducers } from 'redux';

import { reducer as navbarReducer } from '../navbar';
import { reducer as onboardingReducer } from '../onboarding';
import { reducer as recentListReducer } from '../recent-list';
import { reducer as routerReducer } from '../router';
import { reducer as settingsReducer } from '../settings';
import { connectRouter } from 'connected-react-router';
import history from '../router/history';
import loginPageReducer from '../login-page/reducer'

export default combineReducers({
    navbar: navbarReducer,
    onboarding: onboardingReducer,
    recentList: recentListReducer,
    router: connectRouter(history),
    settings: settingsReducer,
    loginPage: loginPageReducer,
});
