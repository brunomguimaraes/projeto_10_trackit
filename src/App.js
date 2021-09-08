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
import HeaderContentFooter from "./Components/HeaderContentFooter";

export default function App () {

    return (
        <>
            <BrowserRouter>

                <Switch>

                    <Route exact path="/">
                      <HeaderContentFooter />
                    </Route>


                </Switch>

            </BrowserRouter>
        </>
    );
}