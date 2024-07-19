import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Flex } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import FullScreenSection from "./fullscreenNavbar";

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

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

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
                zIndex="1000">
                <Box color="black" maxWidth="1280px" margin="auto auto" display={["none", "none", "center", "center"]} justifyContent="center" alignItems="center" >
                    <HStack
                        //px={0}
                        //py={4}

                    >
                        <nav>
                            <HStack spacing={25}>
                                <a href="/#home" onClick={handleClick("home")}>Home</a>
                                <a href="/#aboutme" onClick={handleClick("aboutme")}>Aboute me</a>
                                <a href="/#portfolio" onClick={handleClick("portfolio")}>Portfolio</a>
                                <a href="/#kontakt" onClick={handleClick("kontakt")}>Kontakt</a>
                            </HStack>
                        </nav>
                        <nav>
                            <HStack spacing={25}>
                                {socialMedia.map((social => <a href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a>))}
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
            </Box>
        </FullScreenSection>
    )
}

export default Navbar