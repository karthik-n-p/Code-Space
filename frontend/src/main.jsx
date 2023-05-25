import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/UserPages/Login';
import SignUpPage from './pages/UserPages/SignUp';
import { useState } from 'react';
import AuthContext from './pages/UserPages/AuthContext';
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "./pages/UserPages/firebase-auth";
import PracQuest from './pages/UserPages/Practice';
import QuestionPage from './pages/UserPages/Question';
import { ChakraProvider,extendTheme } from '@chakra-ui/react'

import Landing from './pages/UserPages/Landing'
import Sidebar from './components/landing-page/Navbar';
import Header from './components/landing-page/header';
import Dropdown from './components/signup-page/Dropdown';
import PracQues from './pages/UserPages/Practice';
import Landingcards from './components/landing-page/Landingcards';
import ResourcePage from './pages/UserPages/Resources';
import CompFun from './pages/UserPages/CompetitionPageUser';
import Forum from './pages/UserPages/Forum';
import CompDesc from './pages/UserPages/CompetitionDesc';
import CompQuesPage from './pages/UserPages/CompQues';
import Admincomp from './pages/AdminPages/AdminCompetition';
import CreateCompetitionForm from './pages/AdminPages/AdminCreateComp';
import CreateQuestionForm from './pages/AdminPages/QuestionCreation';
import AdminDashboard from './pages/AdminPages/AdminDashboard';
import CompQues from './components/Contest/InsideContest';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    normal: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    semibold: 'Poppins-SemiBold',
  },
  colors: {

      bg: '#1F1D2B',
      btng: '#2EC866',  /*used for buttons and to hightlight*/
      grey2: '#718096',    /*used for non highlighted contents and boxes*/
      white: '#FFFFFF',
      txtw: '#FFFFFF',  /* text white*/
      txtg: '#C7C9D3',  /* text grey*/
      grey1: '#A0AEC0', /* text dark grey*/
      txtb: '#000000',  /* text black*/
      
  },
});

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false); // Whether the user is registered or not
  const [username, setUsername] = useState(''); // User's username
  const [isadmin, setIsadmin] = useState(false); // Whether the user is admin or not
  const afterlogout = () => {
    setIsRegistered(false);
  }; 
  

  // Function to handle signup success
  const handleSignupSuccess = async (userdata,isAdmin) => {
    console.log("handleSignupSuccess");
    console.log("inside handlesignup",isAdmin);
    setIsadmin(isAdmin);
    
    try {
      const user = auth.currentUser;
      console.log("inside try",user)
      const isadmin = isAdmin;
      if (user) {
        console.log("inside if(user)",user);
        const userDoc = await getDoc(doc(firestore, "username", user.uid));
        console.log("userdoc:", userDoc);
        if (userDoc.exists()) {
          console.log("Inside if(userdocexist):", userDoc.data());
          const userData = userDoc.data();
          setUsername(userData.username);
          console.log("Useremail:", user.email);
          console.log("Username:", username);
          console.log("Name",userData.username);
          setIsRegistered(true);
        }
      }
    } catch (error) {
      setIsRegistered(false);
      console.log(error);
    }
  }
  
  

  return (
    <React.StrictMode>

       <AuthContext.Provider value={{ 
    isadmin: isadmin,                                  
    isRegistered: isRegistered,
    setIsRegistered: setIsRegistered,
    username: username,
    handleSignupSuccess: handleSignupSuccess,
    afterlogout:afterlogout }}>

      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <div>
            <Sidebar />
            {console.log("isRegistered", isRegistered)}
            <Header  />
          </div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<LoginPage handleSignupSuccess={handleSignupSuccess}/>} />
            <Route path="/signup" element={<SignUpPage handleSignupSuccess={handleSignupSuccess} />} />
            <Route path="/practice" element={<PracQues/>} />
            <Route path="/question" element={<QuestionPage/>} />
            <Route path="/resource" element={<ResourcePage/>} />
            <Route path="/competition" element={<CompFun/>} />
            <Route path="/forum" element={<Forum/>} />
            <Route path="/compdesc" element={<CompDesc/>} />

            {/* admin */}
            <Route path="/admin" element={<AdminDashboard/>} />
            <Route path="/admincompetition" element={<Admincomp/>}/>

            {/* //These two components are same */}
            <Route path="/compques" element={<CompQuesPage/>}/>  
            {/* <Route path="/compques" element={<CompQues/>}/> */}
            <Route path="/createcomp" element={<CreateCompetitionForm/>}/>
            <Route path="/createques" element={<CreateQuestionForm/>}/>
            
          </Routes>

        </ChakraProvider>
      </BrowserRouter>
      </AuthContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
