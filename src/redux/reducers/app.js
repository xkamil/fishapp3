import {REDIRECT_TO, SET_APP_DICTIONARY} from "../actions/appActions";
import dictionary from "../../model/dictionary";

const appInitialState = {
    dictionary,
    redirectTo: '/'
};

function app(state = appInitialState, action) {
    switch (action.type) {
        case SET_APP_DICTIONARY : {
            return {...state, dictionary: action.data};
        }
        case REDIRECT_TO : {
            return {...state, redirectTo: action.data};
        }
        default:
            return state;
    }
}

export default app;