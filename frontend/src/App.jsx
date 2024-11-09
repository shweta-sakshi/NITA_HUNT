import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Activationpage from './Activationpage.jsx'
import LandingPage from './LandingPage.jsx';
import EventPage from './EventPage.jsx'
import GamePage from './GamePage.jsx'
import GameInfo from './GameInfo.jsx'
import QueryPage from './QueryPage.jsx'
import Leaderboad from './Leaderboad.jsx'
import GameDiscription from './GameDiscription.jsx'
import GameDashboard from './GameDashboard.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/eventPage" element={<EventPage />} />
          <Route path="/gamePage" element={<GamePage />} />
          <Route path="/gameInfo" element={<GameInfo />} />
          <Route path="/queryPage" element={<QueryPage />} />
          <Route path="/leaderboad" element={<Leaderboad />} />
          <Route path="/gameDashboard" element={<GameDashboard />} />
          <Route path="/gameDiscription" element={<GameDiscription />} />
          <Route
            path="/activation/:ActivationToken"
            element={<Activationpage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
