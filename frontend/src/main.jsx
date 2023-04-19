import React from 'react'
import ReactDOM from 'react-dom/client'

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
      btngrey: '#32313B',    /*used for non highlighted contents and boxes*/
      white: '#FFFFFF',
      txtw: '#FFFFFF',  /* text white*/
      txtg: '#C7C9D3',  /* text grey*/
      txtdg: '#808191', /* text dark grey*/
      txtb: '#000000',  /* text black*/
      
  },
});








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <Landing />
  </ChakraProvider>
  </React.StrictMode>,
  
)
