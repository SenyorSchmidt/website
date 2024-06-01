import React from "react";
import { Avatar, Heading, Box, VStack } from "@chakra-ui/react";
import FullScreenSection from "./fullscreen";

const greeting= "Hallo, ich bin Robert!";
const bio1 = "Ich bin leidenschaftlicher Fotograf und habe Erfahrungen mit Hochzeiten, Geburtstagen etc.";


const About = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        backgroundColor="#EAE7DC"
        color="black">
        <VStack>
        <Avatar src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" size="2xl"/>
            <Heading>{greeting}</Heading>
            <p>{bio1}</p>

        </VStack>
    </FullScreenSection>
)

export default About