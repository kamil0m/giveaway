import Home from "../src/components/Home.jsx";
import SignIn from "../src/components/SignIn.jsx";
import LogIn from "../src/components/LogIn.jsx";
import LoggedOut from "../src/components/LoggedOut.jsx";
import MainLayout from "./components/MainLayout.jsx";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout isScrollAble={true} />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/" element={<MainLayout isScrollAble={false} />}>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/loggedout" element={<LoggedOut />} />
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
