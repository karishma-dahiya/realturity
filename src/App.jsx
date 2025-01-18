import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from "next-themes"
import AppRoutes from './routes/AppRoutes'



// Exporting system creation with custom theme config
import theme from './theme'

function App() {
  

  return (
    <>
      <ChakraProvider theme={theme}>
    

            <AppRoutes />
      

      </ChakraProvider>
      
    </>
  )
}

export default App
