import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "@pages/Auth";
import Dashboard from "@pages/Dashboard";
import CoursePage from "@pages/CoursePage";
import UserPage from '@pages/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/my" element={<Dashboard />} />
        <Route
          path="/course"
          element={<CoursePage userId={"1"} courseId={"1"} />}
        />
        <Route path="/user" element={<UserPage userId={"1"} />} />
      </Routes>
    </Router>
  );
}

export default App;
