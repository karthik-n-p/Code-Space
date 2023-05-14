import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';


import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import './index.css'
import Landing from './pages/Landing'
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








ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <BrowserRouter>
  <ChakraProvider theme={theme}>
  <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Add more routes as needed */}
        </Routes>
  </ChakraProvider>
  </BrowserRouter>
  </React.StrictMode>,
  
)
