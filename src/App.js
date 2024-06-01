import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/navbar"
import About from "./Components/aboutme"
import { VStack } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <>
        <Navbar />
        <About />
      </>
    </ChakraProvider>
  );
}

export default App;
