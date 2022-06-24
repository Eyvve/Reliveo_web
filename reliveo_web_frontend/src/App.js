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

function App() {

  const [logStatus, setLogStatus] = useState(false);

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
    // console.log(localApplicationForm.identityProof[0].path)
    console.log(localApplicationForm.identityProof)
  }, [localApplicationForm]);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <ShowIfDisconnected> */}
          <Routes>
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
                  identityProof={localApplicationForm.identityProof[0].file.name}
                  importedData={localApplicationForm} />} />
                <Route path="/streamingApplication/step6" element={<ApplicationStep6 
                  importedData={localApplicationForm}  />} />
              </Route>
              {/* <Route path="/login" element={<LogIn />} /> */}
          </Routes>
        {/* </ShowIfDisconnected> */}
        {/* <ShowIfConnected> */}
          {/* <ShowIfAdmin> */}
            <Routes>
              <Route path="/webapp/admin/" element={<AdminPage />}>
                <Route path="/webapp/admin/userManager" element={<UserManager />}>
                  <Route path="/webapp/admin/userManager/userList" element={<UserList />} />
                  <Route path="/webapp/admin/userManager/createUser" element={<CreateUser />} />
                </Route>
                <Route path="/webapp/admin/contentManager" element={<ContentManager />}>
                  {/* <Route path="/" element={} /> */}
                </Route>
                <Route path="/webapp/admin/eventManager" element={<EventManager />}>
                  {/* <Route path="/" element={} /> */}
                </Route>
                <Route path="/webapp/admin/streamerManager" element={<StreamerManager />}>
                  {/* <Route path="/" element={} /> */}
                </Route>
              </Route>
            </Routes>
          {/* </ShowIfAdmin> */}
          {/* <ShowIfStreamer>
            <StreamerTopBar />
            <StreamerSideBar />
            <Routes>
              <Route path="/webapp/streamer/eventManager" element={<MyEventManager />} />
              <Route path="/webapp/streamer/eventApplication" element={<MyEventApplication />} />
            </Routes>
          </ShowIfStreamer> */}
        {/* </ShowIfConnected> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
