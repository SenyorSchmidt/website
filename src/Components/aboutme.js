import React from "react";
import { Avatar, Heading, Box, VStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./fullscreen";
import profilePicture from "../Pictures/Profilbild.jpg";

const greeting = "Hi, ich bin Robert und fotografiere leidenschaftlich seit 2017.";
const bio1 = "Ich fotografiere alles von Nacht-, Portrait-, Street- und Landschaftsfotografie, egal ob digital oder analog."
const bio2 = "Das Ziel ist mich in all diesen, als auch neuen Bereichen zu verbessern."
const bio3 = "Und hiermit heiße ich dich herzlich willkommen auf meinem Web-Portfolio."

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