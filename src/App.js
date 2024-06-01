import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/navbar"
import About from "./Components/aboutme"
import Portfolio from "./Components/portfolio"
import ContactMe from './Components/contact';
import { VStack } from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react";
import Footer from './Components/footer';


function App() {
  return (
    <ChakraProvider>
      <>
        <Navbar />
        <About />
        <Portfolio />
        <ContactMe />
        <Footer/>
      </>
    </ChakraProvider>
  );
}

export default App;
