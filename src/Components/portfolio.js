import React from "react";
import { Avatar, Heading, Box, VStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./fullscreen";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import picture1 from "../Pictures/DSC00706.jpg"
import picture2 from "../Pictures/DSC00778.jpg"
import picture3 from "../Pictures/DSC00828.jpg"
import picture4 from "../Pictures/DSC00851.jpg"
import picture5 from "../Pictures/DSC00854.jpg"
import picture6 from "../Pictures/DSC01264.jpg"
import picture7 from "../Pictures/DSC01273.jpg"
import picture8 from "../Pictures/DSC01529.jpg"
import picture9 from "../Pictures/DSC02248.jpg"
import picture10 from "../Pictures/DSC02393.jpg"
import picture11 from "../Pictures/DSC02541.jpg"
import picture12 from "../Pictures/DSC02619.jpg"
import picture13 from "../Pictures/DSC02643.jpg"
import picture14 from "../Pictures/DSC02666.jpg"
import picture15 from "../Pictures/DSC02700.jpg"
import picture16 from "../Pictures/DSC02735.jpg"
import picture17 from "../Pictures/DSC02769.jpg"
import picture18 from "../Pictures/DSC02945.jpg"
import picture19 from "../Pictures/DSC03012.jpg"
import picture20 from "../Pictures/DSC03053.jpg"
import picture21 from "../Pictures/DSC03126.jpg"
import picture22 from "../Pictures/DSC03189.jpg"
import picture23 from "../Pictures/DSC03204.jpg"
import picture24 from "../Pictures/DSC03295.jpg"
import picture25 from "../Pictures/DSC03312.jpg"
import picture26 from "../Pictures/DSC03323.jpg"
import picture27 from "../Pictures/DSC03324.jpg"
import picture28 from "../Pictures/DSC03330.jpg"
import picture29 from "../Pictures/DSC03344.jpg"
import picture30 from "../Pictures/DSC03471.jpg"
import picture31 from "../Pictures/DSC04532.jpg"
import picture32 from "../Pictures/DSC04564.jpg"
import picture33 from "../Pictures/DSC04647.jpg"
import picture34 from "../Pictures/DSC04660.jpg"
import picture35 from "../Pictures/DSC05060.jpg"
import picture36 from "../Pictures/DSC05169-2.jpg"
import picture37 from "../Pictures/DSC05212.jpg"
import picture38 from "../Pictures/DSC05253.jpg"
import picture39 from "../Pictures/DSC05398.jpg"
import picture40 from "../Pictures/DSC05405.jpg"
import picture41 from "../Pictures/DSC05462.jpg"
import picture42 from "../Pictures/DSC05648.jpg"
import picture43 from "../Pictures/DSC05692.jpg"
import picture44 from "../Pictures/DSC06026.jpg"
import picture45 from "../Pictures/DSC06143.jpg"
import picture46 from "../Pictures/DSC06211.jpg"
import picture47 from "../Pictures/DSC06214.jpg"
import picture48 from "../Pictures/DSC06216.jpg"
import picture49 from "../Pictures/DSC06514.jpg"
import picture50 from "../Pictures/DSC07846.jpg"
import picture51 from "../Pictures/DSC07867.jpg"
import picture52 from "../Pictures/DSC07950.jpg"
import picture53 from "../Pictures/DSC08154.jpg"
import picture54 from "../Pictures/DSC08197.jpg"
import picture55 from "../Pictures/DSC08934.jpg"
import picture56 from "../Pictures/DSC08935.jpg"
import picture57 from "../Pictures/DSC09083.jpg"
import picture58 from "../Pictures/DSC09109.jpg"
import picture59 from "../Pictures/DSC09742.jpg"


const bilderVertikal = [
    picture17,
    picture20,
    picture54,
    picture5,
    picture6,
    picture7,
    picture8,
    picture9,
    picture11,
    picture14,
    picture16,
    picture18,
    picture21,
    picture22,
    picture23,
    picture28,
    picture29,
    picture30,
    picture31,
    picture32,
    picture33,
    picture36,
    picture37,
    picture42,
    picture44,
    picture45,
    picture48,
    picture50,
    picture51,
    picture53,
    picture55,
    picture57,
]

const bilderHorizontal = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture10,
    picture12,
    picture13,
    picture15,
    picture19,
    picture24,
    picture25,
    picture26,
    picture27,
    picture34,
    picture35,
    picture38,
    picture39,
    picture40,
    picture41,
    picture43,
    picture46,
    picture47,
    picture49,
    picture52,
    picture56,
    picture58,
    picture59
]

const Portfolio = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            p={8}
            alignItems="flex-start"
            spacing={8}
            backgroundColor="#EAE7DC"
            color="black">
            <Heading as="h1" id="portfolio-section" color="#e85a4f" className="heading">
                Mein Portfolio
            </Heading>

                <Box
                    display="grid"
                    gridTemplateColumns="repeat(3,minmax(0,1fr))"
                    gridGap={10}
                    alignItems="center"
                >
                    {bilderVertikal.map((bild) =>
                        <LazyLoadImage effect="blur" wrapperProps={{style: {transitionDelay: "1.5s"},
                        }}src={bild} />
                    )}
                </Box>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(2,minmax(0,1fr))"
                    gridGap={10}
                >
                    {bilderHorizontal.map((bild) =>
                        <LazyLoadImage effect="blur" wrapperProps={{style: {transitionDelay: "1.5s"},
                    }}src={bild} />
                    )}
                </Box>

        </FullScreenSection>
    )
}

export default Portfolio