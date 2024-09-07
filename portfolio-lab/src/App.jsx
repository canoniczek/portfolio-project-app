




import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import Middleware from "./Middleware.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import SignOut from "./SignOut.jsx";
import GiveThings from "./GiveThings.jsx";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/sign-out" element={<SignOut />} />


        <Route path="" element={<Middleware />}>

          <Route path="/home" element={<Home />} />
          <Route path="/give-things" element={<GiveThings />} />
    
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;