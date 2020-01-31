import Store from "../Store";

export const SET_APP_DICTIONARY = 'SET_APP_DICTIONARY';
export const REDIRECT_TO = 'REDIRECT_TO';

export function setAppDictionary(dictionary) {
    Store.dispatch(SET_APP_DICTIONARY, dictionary);
}

export function redirectTo(location) {
    Store.dispatch(REDIRECT_TO, location);
}