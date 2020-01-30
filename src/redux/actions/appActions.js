import Store from "../Store";

export const SET_APP_VIEW = 'SET_APP_VIEW';
export const SET_APP_DICTIONARY = 'SET_APP_DICTIONARY';
export const REDIRECT_TO = 'REDIRECT_TO';

export const AppView = {
    MAP: 'MAP_VIEW',
    ADD_ITEM: 'ADD_ITEM',
};

function setAppView(view) {
    if (!AppView[view]) {
        return
    }
    Store.dispatch({type: SET_APP_VIEW, data: view});
}

function setAppDictionary(dictionary) {
    Store.dispatch({type: SET_APP_DICTIONARY, data: dictionary});
}

function redirectTo(location) {
    Store.dispatch({type: REDIRECT_TO, data: location});
}

export {
    setAppView,
    setAppDictionary,
    redirectTo
}