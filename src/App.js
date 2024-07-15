import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/navbar"
import About from "./Components/aboutme"
import Portfolio from "./Components/portfolio"
import ContactMe from './Components/contact';
import { ChakraProvider } from "@chakra-ui/react";
import Footer from './Components/footer';
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/abril-fatface';
import '@fontsource/prata';

const theme = extendTheme({
    fonts: {
      heading: `Abril Fatface, serif`,
      body: `'Prata', serif`,
    },
  })


function App() {
  return (
    <ChakraProvider theme={theme}>
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
