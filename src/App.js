import Home from "../src/components/Home.jsx";
import SignIn from "../src/components/SignIn.jsx";
import LogIn from "../src/components/LogIn.jsx";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
