import React, { useState } from "react";
import "./reset.css";
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import Login from "./Components/LoginAndRegistration/Login";
import Registration from "./Components/LoginAndRegistration/Registration";
import Habits from "./Components/Habits-page/Habits";
import Today from "./Components/Today-page/Today";
import History from "./Components/History-page/History";
import UserContext from './Contexts/UserContext';
import DoneHabitsContext from "./Contexts/DoneHabitsContext"
import GlobalStyle from "./GlobalStyled";

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
          <GlobalStyle />
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