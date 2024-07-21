import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, VStack, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import FullScreenSection from "./fullscreenNavbar";
import { useState } from "react";

const socialMedia = [
    {
        icon: faEnvelope,
        url: "mailto: robert-schmidt98@t-online.de"
    },
    {
        icon: faInstagram,
        url: "https://www.instagram.com/rob.s.photography/"
    },
]

const Navbar = () => {

    const handleClick = (anchor) => (e) => {
        e.preventDefault()
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
        changeDisplay("none")
    }

    const[display, changeDisplay] = useState("none")

    return (
        <FullScreenSection
            justifyContent="center"
            p={8}
            alignItems="flex-start"
            spacing={8}
            backgroundColor="#EAE7DC"
            color="black">
            <Box
                position="fixed"
                top={0}
                left={0}
                right={0}
                translateY={0}
                backgroundColor="#EAE7DC"
                zIndex="1000"
                display="fixed">
                <Box color="black" margin="auto auto" display={["none", "none", "center", "center"]} justifyContent="center" alignItems="center" >
                    <HStack
                    //px={0}
                    //py={4}
                    >
                        <nav>
                            <HStack spacing={25}>
                                <a href="" onClick={handleClick("aboutme")}>Aboute me</a>
                                <a href="" onClick={handleClick("portfolio")}>Portfolio</a>
                                <a href="" onClick={handleClick("kontakt")}>Kontakt</a>
                                {socialMedia.map((social => <a href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a>))}
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
                <IconButton
                    size="lg"
                    icon={<HamburgerIcon />}
                    display={["flex", "flex", "none", "none"]}
                    backgroundColor="#EAE7DC"
                    position="fixed"
                    onClick={() => changeDisplay("flex")}
                />
                <Box
                w="100vw"
                backgroundColor="#EAE7DC"
                zIndex={20}
                h="100%"
                position="fixed"
                top="0"
                left="0"
                overflowY="auto"
                display={display}
                >
                    <Box>
                        <IconButton
                        mt={5}
                        ml={5}
                        icon={<CloseIcon/>}
                        backgroundColor="#EAE7DC"
                        onClick={() => changeDisplay("none")}/>
                    </Box>
                    <Box align="center" w="100%">
                        <VStack spacing={8} py={8} align="auto">
                        <a href="/#aboutme" onClick={handleClick("aboutme")}>Aboute me</a>
                        <a href="/#portfolio" onClick={handleClick("portfolio")}>Portfolio</a>
                        <a href="/#kontakt" onClick={handleClick("kontakt")}>Kontakt</a>
                        {socialMedia.map((social => <a href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a>))}
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </FullScreenSection>
    )
}

export default Navbar