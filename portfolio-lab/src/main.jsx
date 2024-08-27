import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Home from './Home.jsx'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import SignOut from './SignOut.jsx'
import GiveThings from './GiveThings.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  
  // <Home />
  // <SignIn />
  // <SignUp />
  // <SignOut />
  <GiveThings />
)
