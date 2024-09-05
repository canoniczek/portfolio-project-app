
// import './components/main.scss';

// // import './App.css'

// function App() {


//   return (
//     <>
//       <p className='remember'>test</p>
//     </>
//   )
// }

// export default App






import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
// import Middleware from "./Middleware.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />

        
    
        <Route path="/sign-out" element={<SignOut />} /> */}


        <Route path="/home" element={<Home />} />

        {/* <Route path="" element={<Middleware />}>
          <Route index element={<ShowFunds />} />
          <Route path="/add-funds" element={<AddFunds />} />
          <Route path="/show-funds" element={<ShowFunds />} />
          <Route path="/main-panel" element={<MainPanel />} />
          <Route path="/compare-values" element={<CompareValues />} />
          <Route path="/investment-branches" element={<InvestmentBranches />} />
          <Route path="/get-saving-history" element={<GetSavingHistory />} />
          
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;