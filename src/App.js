import React from "react";
import "./css/reset.css";
import "./css/style.css";
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Habits from "./Components/Habits";
import Today from "./Components/Today";
import History from "./Components/History";

export default function App () {

    return (
        <>
            <BrowserRouter>

                <Switch>

                    <Route exact path="/">
                      <Login />
                    </Route>
                    <Route exact path="/registration">
                      <Registration />
                    </Route>
                    <Route exact path="/habits">
                      <Habits />
                    </Route>
                    <Route exact path="/today">
                      <Today />
                    </Route>
                    <Route exact path="/history">
                      <History />
                    </Route>

                </Switch>

            </BrowserRouter>
        </>
    );
}