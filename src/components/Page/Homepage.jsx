import React, { useState, useReducer, useMemo } from "react";
import {
  Body,
  BlackBox,
  GreyBox,
  UserCardDetails,
  ProfileImg,
  Copyright,
} from "./HomeCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import AboutMe from "./AboutMe/AboutMe";
import Sidebar from "../Features/Sidebar";
import { LanguageProvider } from "../Context/LanguageContext";
import Resume from "../Features/Resume/Resume";
import FirstPage from "./FirstPage/FirstPage";
import DevDetails from "../Features/DevDetails/DevDetails";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import { Button } from "@material-ui/core";
import DevDetailsHebrew from "../Features/DevDetails/DevDetailsHebrew";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export default function Homepage() {
  const [hebrew, setHebrew] = useState({ isTrue: false });

  const style = { color: "white" };
  const [state, dispatch] = useReducer(changeLanguage, { isTrue: false });

  function changeLanguage(state, action) {
    switch (action.type) {
      case "Hebrew":
        return setHebrew({ isTrue: true });
      case "English":
        return setHebrew({ isTrue: false });
      default:
        throw new Error();
    }
  }
  const changeLang = useMemo(() => {
    return hebrew.isTrue ? <DevDetailsHebrew /> : <DevDetails />;
  });
  return (
    <>
      <LanguageProvider value={hebrew}>
        <Router>
          <div>
            <Body>
              <BlackBox className="animate__animated animate__zoomInUp">
                <UserCardDetails>
                  <Switch>
                    <Route exact path="/" component={FirstPage} />
                    <Route exact path="/AboutMe" component={AboutMe} />
                    <Route exact path="/Resume" component={Resume} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Projects" component={Projects} />
                  </Switch>
                </UserCardDetails>
              </BlackBox>
            </Body>
            <Sidebar />
            <GreyBox className="animate__animated animate__zoomInUp">
              <ProfileImg
                src="https://i.ibb.co/WcrKmzp/fixed-Profile.jpg"
                width="10rem"
                height="8rem"
              />
              {changeLang}
              <div>
                {hebrew.isTrue ? (
                  <Button
                    variant="contained"
                    color="primary"
                    style={style}
                    onClick={() => {
                      dispatch({ type: "Hebrew" });
                    }}
                  >
                    עברית
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    style={style}
                    onClick={() => {
                      dispatch({ type: "Hebrew" });
                    }}
                  >
                    Hebrew
                  </Button>
                )}
                {hebrew.isTrue ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch({ type: "English" });
                    }}
                  >
                    {" "}
                    אנגלית
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch({ type: "English" });
                    }}
                  >
                    {" "}
                    English
                  </Button>
                )}
              </div>
              <Copyright>
                <FontAwesomeIcon icon={faCodepen} />{" "}
                {hebrew.isTrue
                  ? "כל הזכויות שמורות יוני.ב"
                  : "All Rights reserved Yoni_B"}
              </Copyright>
            </GreyBox>
          </div>
        </Router>
      </LanguageProvider>
    </>
  );
}
