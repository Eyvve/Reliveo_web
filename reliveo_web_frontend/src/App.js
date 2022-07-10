import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { useState, useEffect } from "react";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import { LogContext } from "./Context/Contexts";
import * as jose from 'jose';

import AdminPage from "./Components/AdminComponents/AdminPage";
import Webapp from "./Components/Webapp";
import NoAccess from "./Components/ErrorPages/NoAccess";

import UserManager from "./Components/AdminComponents/UserManager/UserManager";
import UserList from "./Components/AdminComponents/UserManager/UserList";
import CreateUser from "./Components/AdminComponents/UserManager/CreateUser";

import ContentList from "./Components/AdminComponents/ContentManager/ContentList";
import ContentManager from "./Components/AdminComponents/ContentManager/ContentManager";

import EventManager from "./Components/AdminComponents/EventManager/EventManager";
import EventList from "./Components/AdminComponents/EventManager/EventList";
import EventApplications from "./Components/AdminComponents/EventManager/EventApplications";

import StreamerManager from "./Components/AdminComponents/StreamerManager/StreamerManager";
import StreamerList from "./Components/AdminComponents/StreamerManager/StreamerList";
import StreamerApplications from "./Components/AdminComponents/StreamerManager/StreamerApplications";

import Login from "./Components/Auth/Login";
import useGetCookies from "./Hooks/Get/useGetCookie";
import useLogin from "./Hooks/Post/useLogin";
import useGetDecodedJWT from "./Hooks/Get/useGetDecodedJWT"

import ShowCase from "./Components/ShowCaseComponents/ShowCase";
import StreamingApplication from "./Components/ShowCaseComponents/StreamingApplication";
import ApplicationStep1 from "./Components/ShowCaseComponents/ApplicationStep1";
import ApplicationStep2 from "./Components/ShowCaseComponents/ApplicationStep2";
import ApplicationStep3 from "./Components/ShowCaseComponents/ApplicationStep3";
import ApplicationStep4 from "./Components/ShowCaseComponents/ApplicationStep4";
import ApplicationStep5 from "./Components/ShowCaseComponents/ApplicationStep5";
import ApplicationStep6 from "./Components/ShowCaseComponents/ApplicationStep6";
import ApplicationStep7 from "./Components/ShowCaseComponents/ApplicationStep7";

import StreamerTopBar from "./Components/StreamerComponents/StreamerTopBar";
import StreamerSideBar from "./Components/StreamerComponents/StreamerSideBar";
import AppIndex from "./Components/Index/AppIndex";
import MyEventManager from "./Components/StreamerComponents/MyEventList";
import MyEventApplication from "./Components/StreamerComponents/MyEventApplication";
import useGetEventList from "./Hooks/Get/useGetEventList";
import EventListPending from "./Components/AdminComponents/EventManager/EventListPending";

import StreamerPage from "./Components/StreamerComponents/StreamerPage";
import MyEventList from "./Components/StreamerComponents/MyEventList";
import StreamSetup from "./Components/StreamerComponents/StreamSetup";

import ApplicationEventStep1 from "./Components/StreamerComponents/StreamerCreateEvent/ApplicationEventStep1";
import ApplicationEventStep2 from "./Components/StreamerComponents/StreamerCreateEvent/ApplicationEventStep2";
import ApplicationEventStep3 from "./Components/StreamerComponents/StreamerCreateEvent/ApplicationEventStep3";
import ApplicationEventStep4 from "./Components/StreamerComponents/StreamerCreateEvent/ApplicationEventStep4";
import CreateAdmin from "./Components/AdminComponents/UserManager/CreateAdmin";

function App() {
  //for login
  const login = useLogin();
  //get Coockies
  const cookies = useGetCookies();
  const getJwt = useGetDecodedJWT()

  let {ReliveoJwt} = useGetCookies();

  //state local for logged  
  const [loggedUser, setLoggedUser] = useState({
    status: "error",
    userid: "",
    username: "",
    email: "",
    photo: "",
    roles: []
  });

  

  //state info user in local
  const [localUser, setLocalUser] = useState({ password: "", email: "" });

  //state bool login
  const [needsLogin, setNeedsLogin] = useState(true);

  //become a streamer data for form
  const [localApplicationForm, setLocalApplicationForm] = useState({
    eventType: "",
    streamerName: "",
    genreList: [],
    profilePicture: [],
    officialWebsite: "",
    description: "",
    identityProof: "",
    email: "",
    password: "",
  });

  //handle ReliveoJwt
  useEffect(() => {
    if (Object.keys(cookies).includes("ReliveoJwt")) {
      // console.log("got cookies !", loggedUser);
      setLoggedUser(getJwt())
    }
  }, []);

  useEffect(() => {
    const ten_minutes = 10 * 60 * 1000
    if(ReliveoJwt) {
        const JWTdata = jose.decodeJwt(ReliveoJwt)
        const JWTtimeleft = Date.now() - JWTdata.exp

        if (JWTtimeleft < ten_minutes) {
            console.log('Uh, the token has expired, let me refresh that !')
            try {
                login(localUser.email, localUser.password)
                    .then(data => {
                        document.cookie = "ReliveoJwt" + "= " + data.token + "; expires =" + (new Date()).setDate((new Date()).getDate() + 1) + "; path=/"
                    })
            } catch (e) {
                console.log("Your token is corrupted, sorry.")
            }
        }
    }
})

  //user not logged
  useEffect(() => {
    if (needsLogin && localUser.email !== "") {
      // console.log("login ?");
      login(localUser.email, localUser.password)
        .then(data => {
          let jwtData = jose.decodeJwt(data.token)
          document.cookie = "ReliveoJwt" + "= " + data.token + "; expires =" + (new Date()).setDate((new Date()).getDate() + 1) + "; path=/"
          setLoggedUser({
              status: "OK",
              userid: jwtData.userid,
              username: jwtData.username,
              email: jwtData.email,
              photo: jwtData.photo,
              roles: jwtData.roles
            })
        })
    }
  }, [localUser]);

  return (
    <div className="App">
      <LogContext.Provider value={[loggedUser, setLoggedUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppIndex />}>
            <Route
              path="/"
              element={
                <ShowCase setLocalApplicationForm={setLocalApplicationForm} />
              }
            />

            <Route
              path="/streamingApplication"
              element={<StreamingApplication />}
            >
              <Route
                path="/streamingApplication/step1"
                element={
                  <ApplicationStep1
                    setLocalApplicationForm={setLocalApplicationForm}
                    importedData={localApplicationForm.eventType}
                  />
                }
              />
              <Route
                path="/streamingApplication/step2"
                element={
                  <ApplicationStep2
                    setLocalApplicationForm={setLocalApplicationForm}
                    importedNameData={localApplicationForm.streamerName}
                    importedGenreData={localApplicationForm.genreList}
                    localApplicationForm={localApplicationForm}
                  />
                }
              />
              <Route
                path="/streamingApplication/step3"
                element={
                  <ApplicationStep3
                    setLocalApplicationForm={setLocalApplicationForm}
                    importedData={localApplicationForm}
                    importedPPData={localApplicationForm.profilePicture}
                  />
                }
              />
              <Route
                path="/streamingApplication/step4"
                element={
                  <ApplicationStep4
                    setLocalApplicationForm={setLocalApplicationForm}
                    importedData={localApplicationForm}
                    importedProofData={localApplicationForm.identityProof}
                    importedLinkData={localApplicationForm.officialWebsite}
                    importedDescriptionData={localApplicationForm.description}
                  />
                }
              />
              <Route
              path="/streamingApplication/step5"
              element={
                <ApplicationStep5
                  setLocalApplicationForm={setLocalApplicationForm}
                />
              }
            />
              <Route
                path="/streamingApplication/step6"
                element={
                  <ApplicationStep6
                    eventType={localApplicationForm.eventType.label}
                    streamerName={localApplicationForm.streamerName}
                    genreList={localApplicationForm.genreList}
                    profilePicture={localApplicationForm.profilePicture}
                    officialWebsite={localApplicationForm.officialWebsite}
                    description={localApplicationForm.description}
                    identityProof={localApplicationForm.identityProof}
                    importedData={localApplicationForm}
                    importedEmailData={localApplicationForm.email}
                  />
                }
              />
              <Route
                path="/streamingApplication/step7"
                element={
                  <ApplicationStep7 importedData={localApplicationForm} />
                }
              />
            </Route>

            <Route
              path="/login"
              element={
                <Login
                  localUser={localUser}
                  loggedUser={loggedUser}
                  setLoggedUser={setLoggedUser}
                  setLocalUser={setLocalUser}
                  needsLogin={needsLogin}
                  setNeedsLogin={setNeedsLogin}
                />
              }
            ></Route>
            {/* URL - Streamer  */}
            <Route path="/noAccess" element={<NoAccess setLoggedUser={setLoggedUser} />}/>
            <Route path="/webapp" element={<Webapp loggedUser={loggedUser} />}>
            <Route path="/webapp/streamer/" element={<StreamerPage />}>
              <Route
                path="/webapp/streamer/eventApplication/step1"
                element={
                  <ApplicationEventStep1
                    setLocalApplicationForm={setLocalApplicationForm}
                    importedData={localApplicationForm.eventType}
                  />
                }
              />
              <Route
                path="/webapp/streamer/eventApplication/step2"
                element={
                  <ApplicationEventStep2
                    setLocalApplicationForm={setLocalApplicationForm}
                    importedNameData={localApplicationForm.streamerName}
                    importedGenreData={localApplicationForm.genreList}
                    localApplicationForm={localApplicationForm}
                  />
                }
              />
              <Route
                path="/webapp/streamer/eventApplication/step3"
                element={
                  <ApplicationEventStep3
                    setLocalApplicationForm={setLocalApplicationForm}
                    importedData={localApplicationForm}
                    importedPPData={localApplicationForm.profilePicture}
                  />
                }
              />
              <Route
                path="/webapp/streamer/eventApplication/step4"
                element={
                  <ApplicationEventStep4
                    setLocalApplicationForm={setLocalApplicationForm}
                    importedData={localApplicationForm}
                    importedProofData={localApplicationForm.identityProof}
                    importedLinkData={localApplicationForm.officialWebsite}
                    importedDescriptionData={localApplicationForm.description}
                  />
                }
              />
              <Route path="/webapp/streamer/MyEventList" element={<MyEventList />}>
              </Route>  
              <Route path="/webapp/streamer/StreamSetup" element={<StreamSetup />}>
              </Route>  
              </Route>

            {/* URL - ADMIN */}
            <Route path="/webapp/admin/" element={<AdminPage />}>
              <Route path="/webapp/admin/userManager" element={<UserManager />}>
                <Route
                  path="/webapp/admin/userManager/userList"
                  element={<UserList />}
                />
                <Route
                  path="/webapp/admin/userManager/createUser"
                  element={<CreateUser />}
                />
                <Route
                  path="/webapp/admin/userManager/createAdmin"
                  element={<CreateAdmin />}
                />
              </Route>
              <Route
                path="/webapp/admin/contentManager"
                element={<ContentManager />}
              >
                <Route
                  path="/webapp/admin/contentManager/contentList"
                  element={<ContentList />}
                />
              </Route>
              <Route
                path="/webapp/admin/streamerManager"
                element={<StreamerManager />}
              >
                <Route
                  path="/webapp/admin/streamerManager/streamerList"
                  element={<StreamerList />}
                />
                <Route
                  path="/webapp/admin/streamerManager/streamerApplications"
                  element={<StreamerApplications />}
                />
              </Route>
              <Route
                path="/webapp/admin/eventManager"
                element={<EventManager />}
              >
                <Route
                  path="/webapp/admin/eventManager/eventList"
                  element={<EventList />}
                />
                {/* <Route
                  path="/webapp/admin/eventManager/eventListPending"
                  element={<EventListPending />}
                /> */}
              </Route>
            </Route>
            <Route path="/webapp/streamer/" element={< StreamerPage />}>
              <Route
                path="/webapp/streamer/eventManager"
                element={<UserManager />}
              >
                <Route
                  path="/webapp/streamer/eventManager/eventList"
                  element={<UserList />}
                />
                <Route
                  path="/webapp/streamer/eventManager/createEvent"
                  element={<CreateUser />}
                />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </LogContext.Provider>
    </div>
  );
}

export default App;
