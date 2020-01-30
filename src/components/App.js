import React from 'react';
import Map from "./Map";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {
    const redirectTo = useSelector(store => store.app.redirectTo);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Map/>
                </Route>
            </Switch>
            <Redirect to={redirectTo} push={true}/>
        </BrowserRouter>
    );
}

export default App;
