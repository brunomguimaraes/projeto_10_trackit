import React, { useState } from "react";
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
import UserContext from './Components/UserContext';

export default function App () {

  const [loginInfo, setLoginInfo] = useState(null);

  const getUserInfo = (userInfo) => {
    setLoginInfo(userInfo);
  }

  console.log(loginInfo);

    return (
        <>
            <BrowserRouter>

                <Switch>

                    <Route exact path="/" >
                      <Login getUserInfo={getUserInfo}/>
                    </Route>
                    <Route exact path="/registration">
                      <Registration />
                    </Route>

                  <UserContext.Provider value={loginInfo}>

                    <Route exact path="/habits">
                      <Habits />
                    </Route>
                    <Route exact path="/today">
                      <Today />
                    </Route>
                    <Route exact path="/history">
                      <History />
                    </Route>

                  </UserContext.Provider>

                </Switch>

            </BrowserRouter>
        </>
    );
}