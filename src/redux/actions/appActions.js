import Store from "../Store";

export const SET_APP_VIEW = 'SET_APP_VIEW';

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

export {
   setAppView,
}