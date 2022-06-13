import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Routes, Link, Route, BrowserRouter} from 'react-router-dom'
import ShowIfDisconnected from './Components/LogConditions/ShowIfDisconnected'
import ShowIfConnected from './Components/LogConditions/ShowIfConnected';
import ShowCase from './Components/ShowCaseComponents/ShowCase'
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

  return (
    <div className="App">
      <BrowserRouter>
        {/* <ShowIfDisconnected> */}
          <Routes>
              <Route path="/" element={<ShowCase />} />
              <Route path="/streamingApplication" element={<StreamingApplication />} />
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
