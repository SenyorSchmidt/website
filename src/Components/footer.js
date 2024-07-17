import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import {
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, VStack, Heading } from "@chakra-ui/react";

const socialMedia = [

    {
        icon: faInstagram,
        url: "https://www.instagram.com/rob.s.photography/"
    },

]

const Footer = () => {
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
        <Box
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#e85a4f">
            <Box color="#eae7dc" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={200}
                    py={0}
                    justifyContent="space-between"
                    alignItems="bottom"
                >
                    <footer>
                        <VStack spacing={2.5} alignItems="right">
                            <Heading size="lg">Robert Schmidt</Heading>
                            <p>Fotograf</p>
                            <p>E-Mail: robert-schmidt98@t-online.de</p>
                            <p>Telefon: +49 171 243693</p>
                            <HStack spacing={15}>
                                {socialMedia.map((social => <a href={social.url}><FontAwesomeIcon icon={social.icon} size="lg" /></a>))}
                            </HStack>
                        </VStack>
                    </footer>
                    <footer>
                        <VStack spacing={2.5} alignItems="left">
                            <Heading size="md" className="heading">Navigation</Heading>
                            <a href="/#home" onClick={handleClick("home")} className="footerNavigation">Home</a>
                            <a href="/#aboutme" onClick={handleClick("aboutme")} className="footerNavigation">Aboute me</a>
                            <a href="/#portfolio" onClick={handleClick("portfolio")} className="footerNavigation">Portfolio</a>
                            <a href="/#kontakt" onClick={handleClick("kontakt")} className="footerNavigation">Kontakt</a>
                        </VStack>
                    </footer>

                </HStack>
            </Box>
            <p className="copyright">© Websitedesign by Waldemar Schmidt 2024 | waldemar.schmidt.1@gmx.de</p>
        </Box>

    )
}

export default Footer