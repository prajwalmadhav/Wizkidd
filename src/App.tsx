import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {Suspense, lazy} from "react"
// import Homepage from "./pages/Homepage/Homepage"
import { BrowserRouter as Router, Route,Routes, Outlet } from 'react-router-dom'
import Dashboard from "./pages/Dashboard/Dashboard";
import Courses from './pages/Dashboard/Courses';
import Sidebar from './components/Dashboard/Sidebar';

import Testpg from "./components/Dashboard/Trial/Testpg";


import QuizOne from './components/Quiz/QuizOne';
import QuizTwo from './components/Quiz/QuizTwo';


import "./App.css"
import TestPage from "./components/TestPage/TestPage";
import Settings from "./components/Settings/Settings";
import ProfilePage from "./components/Profile/ProfilePage";
const Homepage = lazy(() => import("./pages/Homepage/Homepage"))


export const App = () => {
  var Spinner = require('react-spinkit');
  console.log("REACT_APP_GOOGLE_AUTH_CLIENT_ID", process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID)

  return (
    <ChakraProvider theme={theme}>
      <Router>
        
        <Routes>
          {/* Pages without dashboard sidebar */}
          <Route path="/" element={
            <Suspense fallback={<Spinner className="spinner" name='double-bounce' />
          }> <Homepage/></Suspense>
          }/>
          
          {/* <Route path='home' element={<Dashboard/>} /> */}
          <Route path='smoke' element={<Testpg/>} />
          <Route path='pg' element={<Testpg/>} />
          {/* <Route path='welcome' element={<PreQuestions/>} /> */}
          {/* <Route path='contactus' element={<ContactUs/>} /> */}
          {/* <Route path='home/courses' element={<Courses/>} /> */}

          
          <Route path="/" element={<LayoutsWithNavbar />}>
            {/* Pages with dashboard sidebar */}
            <Route path='home' element={<Dashboard/>} />
            <Route path='home/courses' element={<Courses/>} />

            
            <Route path='quiz1' element={<QuizOne />} />
            <Route path='quiz2' element={<QuizTwo />} />

            <Route path='tests' element={<TestPage/>} />
            <Route path='profile' element={<ProfilePage/>} />
            <Route path='settings' element={<Settings/>} />


          </Route>

        </Routes>

      </Router>
    </ChakraProvider>
  );
}

function LayoutsWithNavbar() {
  return (
    <>
      {/* Your navbar component */}
      <Sidebar children={undefined} />

      {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
      <Outlet /> 
      
      {/* You can add a footer to get fancy in here :) */}
    </>
  );
}