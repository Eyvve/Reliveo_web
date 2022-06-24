import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom'
import AdminPage from './Components/AdminComponents/AdminPage';
import UserManager from './Components/AdminComponents/UserManager';
import ContentManager from './Components/AdminComponents/ContentManager';
import EventManager from './Components/AdminComponents/EventManager';
import StreamerManager from './Components/AdminComponents/StreamerManager';
import UserList from './Components/AdminComponents/UserList';
import CreateUser from './Components/AdminComponents/CreateUser';
import ShowCase from './Components/ShowCaseComponents/ShowCase';
import StreamingApplication from './Components/ShowCaseComponents/StreamingApplication';
import ApplicationStep1 from './Components/ShowCaseComponents/ApplicationStep1'
import ApplicationStep2 from './Components/ShowCaseComponents/ApplicationStep2'
import ApplicationStep3 from './Components/ShowCaseComponents/ApplicationStep3'
import ApplicationStep4 from './Components/ShowCaseComponents/ApplicationStep4'
import ApplicationStep5 from './Components/ShowCaseComponents/ApplicationStep5'
import ApplicationStep6 from './Components/ShowCaseComponents/ApplicationStep6'
import Login from './Components/Auth/Login';
import useGetCookies from "./Hooks/useGetCookie";
import useLogin from "./Hooks/useLogin";
import StreamerTopBar from './Components/StreamerComponents/StreamerTopBar'
import StreamerSideBar from './Components/StreamerComponents/StreamerSideBar'
import AppIndex from './Components/Index/AppIndex';
import MyEventManager from './Components/StreamerComponents/MyEventManager';
import MyEventApplication from './Components/StreamerComponents/MyEventApplication';

function App() {
  
  const login = useLogin();
  const cookies = useGetCookies();

  
  const [loggedUser, setLoggedUser] = useState({
    status: 'error',
    token: "",
    username: "",
    status: "streamer"
  })
  const [localUser, setLocalUser] = useState({password: "", username: ""})
  const [needsLogin, setNeedsLogin] = useState(true)

  const [localApplicationForm, setLocalApplicationForm] = useState({
    eventType: "",
    streamerName: "",
    genreList: [],
    profilePicture: [],
    officialWebsite: "",
    description: "",
    identityProof: ""
  });

  useEffect(() => {
    if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_username')) {
        console.log('got cookies !', loggedUser)
        setLoggedUser(prev => ({
            ...prev,
            username: cookies.hetic_username,
            token: cookies.hetic_token,
            status: cookies.hetic_status
        }))
    }
}, [])

useEffect(() => {
    if (needsLogin && localUser.username !== '') {
        console.log('login ?')
        login(localUser.username, localUser.password)
            // .then(data => setLoggedUser(data))
    }
}, [localUser])

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppIndex />}>
            <Route path="/" element={<ShowCase 
                  setLocalApplicationForm={setLocalApplicationForm} />} />

            <Route path="/streamingApplication" element={<StreamingApplication />}>
              <Route path="/streamingApplication/step1" element={<ApplicationStep1 
                setLocalApplicationForm={setLocalApplicationForm} 
                importedData={localApplicationForm.eventType} />} />
              <Route path="/streamingApplication/step2" element={<ApplicationStep2 
                setLocalApplicationForm={setLocalApplicationForm} 
                importedNameData={localApplicationForm.streamerName} 
                importedGenreData={localApplicationForm.genreList} 
                localApplicationForm={localApplicationForm} />} />
              <Route path="/streamingApplication/step3" element={<ApplicationStep3 
                setLocalApplicationForm={setLocalApplicationForm} 
                importedData={localApplicationForm} 
                importedPPData={localApplicationForm.profilePicture}  />} />
              <Route path="/streamingApplication/step4" element={<ApplicationStep4 
                setLocalApplicationForm={setLocalApplicationForm} 
                importedData={localApplicationForm} 
                importedProofData={localApplicationForm.identityProof} 
                importedLinkData={localApplicationForm.officialWebsite} 
                importedDescriptionData={localApplicationForm.description} />} />
              <Route path="/streamingApplication/step5" element={<ApplicationStep5 
                eventType={localApplicationForm.eventType.label}
                streamerName={localApplicationForm.streamerName}
                genreList={localApplicationForm.genreList}
                profilePicture={localApplicationForm.profilePicture}
                officialWebsite={localApplicationForm.officialWebsite}
                description={localApplicationForm.description}
                identityProof={localApplicationForm.identityProof}
                importedData={localApplicationForm} />} />
              <Route path="/streamingApplication/step6" element={<ApplicationStep6 
                importedData={localApplicationForm}  />} />
            </Route>

            <Route path="/login" element={<Login loggedUser={loggedUser} setLocalUser={setLocalUser} needsLogin={needsLogin} setNeedsLogin={setNeedsLogin} />} ></ Route>
      
            <Route path="/webapp/admin/" element={<AdminPage />}>
              <Route path="/webapp/admin/userManager" element={<UserManager />}>
                <Route path="/webapp/admin/userManager/userList" element={<UserList />} />
                <Route path="/webapp/admin/userManager/createUser" element={<CreateUser />} />
              </Route>
              <Route path="/webapp/admin/contentManager" element={<ContentManager />}>
               
              </Route>
              <Route path="/webapp/admin/eventManager" element={<EventManager />}>
           
              </Route>
              <Route path="/webapp/admin/streamerManager" element={<StreamerManager />}>
               
              </Route>
            </Route>
            <Route path="/webapp/streamer/" element={<AdminPage />}>
                <Route path="/webapp/streamer/eventManager" element={<UserManager />}>
                  <Route path="/webapp/streamer/eventManager/eventList" element={<UserList />} />
                  <Route path="/webapp/streamer/eventManager/createEvent" element={<CreateUser />} />
                </Route>
           </Route>
           </Route>
           </Routes>
          </BrowserRouter>
        </div>
            









      
  );
}

export default App;
