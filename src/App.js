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
import DoneHabitsContext from "./Components/DoneHabitsContext"

export default function App () {

  const [loginInfo, setLoginInfo] = useState(null);
  const [percentage, setPercentage] = useState(0);

  const getUserInfo = (userInfo) => {
    setLoginInfo(userInfo);
  }
  const getPercentage = (value) => {
    setPercentage(value);
  }

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
                  <DoneHabitsContext.Provider value={percentage}>
                    <Route exact path="/habits">
                      <Habits />
                    </Route>
                    <Route exact path="/today">
                      <Today getPercentage={getPercentage}/>
                    </Route>
                    <Route exact path="/history">
                      <History />
                    </Route>
                  </DoneHabitsContext.Provider>
                  </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </>
    );
}