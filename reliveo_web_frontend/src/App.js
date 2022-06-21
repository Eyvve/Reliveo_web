import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom'
import ShowIfDisconnected from './Components/LogConditions/ShowIfDisconnected'
import ShowIfConnected from './Components/LogConditions/ShowIfConnected';
import ShowCase from './Components/ShowCaseComponents/ShowCase'
import ApplicationStep1 from './Components/ShowCaseComponents/ApplicationStep1'
import ApplicationStep2 from './Components/ShowCaseComponents/ApplicationStep2'
import ApplicationStep3 from './Components/ShowCaseComponents/ApplicationStep3'
import ApplicationStep4 from './Components/ShowCaseComponents/ApplicationStep4'
import ApplicationStep5 from './Components/ShowCaseComponents/ApplicationStep5'
import ShowIfAdmin from './Components/AdminComponents/ShowIfAdmin';
import ShowIfStreamer from './Components/StreamerComponents/ShowIfStreamer';
import StreamerTopBar from './Components/StreamerComponents/StreamerTopBar'
import StreamerSideBar from './Components/StreamerComponents/StreamerSideBar'
import UserManager from './Components/AdminComponents/UserManager';
import ContentManager from './Components/AdminComponents/ContentManager';
import EventManager from './Components/AdminComponents/EventManager';
import StreamerManager from './Components/AdminComponents/StreamerManager';
import StreamingApplication from './Components/ShowCaseComponents/StreamingApplication';
import LogIn from './Components/ShowCaseComponents/LogIn';
import MyEventApplication from './Components/StreamerComponents/MyEventApplication';
import MyEventManager from './Components/StreamerComponents/MyEventManager';

function App() {

  const [logStatus, setLogStatus] = useState(false);
  
  useEffect(() => {
    console.log(localApplicationForm)
  });

  const [localApplicationForm, setLocalApplicationForm] = useState({
    eventType: "",
    streamerName: "",
    genreList: [],
    profilePicture: [],
    officialWebsite: "",
    description: "",
    identityProof: ""
  });

  return (
    <div className="App">
      <BrowserRouter>
        {/* <ShowIfDisconnected> */}
          <Routes>
              <Route path="/" element={<ShowCase setLocalApplicationForm={setLocalApplicationForm} />} />
              <Route path="/streamingApplication" element={<StreamingApplication />}>
                <Route path="/streamingApplication/step1" element={<ApplicationStep1 setLocalApplicationForm={setLocalApplicationForm} importedData={localApplicationForm.eventType} />} />
                <Route path="/streamingApplication/step2" element={<ApplicationStep2 setLocalApplicationForm={setLocalApplicationForm} importedNameData={localApplicationForm.streamerName} importedGenreData={localApplicationForm.genreList} localApplicationForm={localApplicationForm} />} />
                <Route path="/streamingApplication/step3" element={<ApplicationStep3 setLocalApplicationForm={setLocalApplicationForm} importedData={localApplicationForm} importedPPData={localApplicationForm.profilePicture}  />} />
                <Route path="/streamingApplication/step4" element={<ApplicationStep4 setLocalApplicationForm={setLocalApplicationForm} importedData={localApplicationForm} importedProofData={localApplicationForm.identityProof}  />} />
                <Route path="/streamingApplication/step5" element={<ApplicationStep5 setLocalApplicationForm={setLocalApplicationForm} importedData={localApplicationForm}  />} />
              </Route>
              <Route path="/login" element={<LogIn />} />
          </Routes>
        {/* </ShowIfDisconnected> */}
        {/* <ShowIfConnected>
          <ShowIfAdmin>
            <StreamerTopBar />
            <StreamerSideBar />
            <Routes>
              <Route path="/webapp/admin/userManager" element={<UserManager />} />
              <Route path="/webapp/admin/contentManager" element={<ContentManager />} />
              <Route path="/webapp/admin/eventManager" element={<EventManager />} />
              <Route path="/webapp/admin/streamerManager" element={<StreamerManager />} />
            </Routes>
          </ShowIfAdmin>
          <ShowIfStreamer>
            <StreamerTopBar />
            <StreamerSideBar />
            <Routes>
              <Route path="/webapp/streamer/eventManager" element={<MyEventManager />} />
              <Route path="/webapp/streamer/eventApplication" element={<MyEventApplication />} />
            </Routes>
          </ShowIfStreamer>
        </ShowIfConnected> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
