import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/navbar"
import About from "./Components/aboutme"
import Portfolio from "./Components/portfolio"
import { VStack } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
      <>
        <Navbar />
        <About />
        <Portfolio />
      </>
    </ChakraProvider>
  );
}

export default App;
