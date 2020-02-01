import React from 'react';
import MapScreen from "./Map";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {
    const redirectTo = useSelector(store => store.app.redirectTo);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <MapScreen/>
                </Route>
            </Switch>
            <Redirect to={redirectTo} push={true}/>
        </BrowserRouter>
    );
}

export default App;
