import React from "react";
import { Avatar, Heading, Box, VStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./fullscreen";
import profilePicture from "../Pictures/Profilbild.jpg";

const greeting = "Hallo, ich bin Robert!";
const bio1 = "Ich bin leidenschaftlicher Fotograf und habe Erfahrungen mit Hochzeiten, Geburtstagen etc.";
const bio2 = "Ich wohne in Weiden, bin aber örtlich flexibel, somit ich Ihre schönsten Momente einfangen kann, wo Sie gerade sind."
const bio3 = "Schauen Sie sich gerne auf meiner Website um und wenn Ihnen gefällt was Sie sehen, kontaktieren Sie mich gerne über das Kontaktformular am Ende der Seite!"

const About = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        backgroundColor="#EAE7DC"
        color="black"
        id="aboutme-section">
        <VStack>
            <Image src={profilePicture}
                boxSize='250px'
                objectFit='cover'
                borderRadius="full"
            ></Image>
            <Heading as="h1" id="portfolio-section" color="#e85a4f" className="heading">{greeting}</Heading>
            <p>{bio1}</p>
            <p>{bio2}</p>
            <p>{bio3}</p>
        </VStack>
    </FullScreenSection>
)

export default About