import React from "react";
import { Heading, Box, } from "@chakra-ui/react";
import FullScreenSection from "./fullscreen";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import picture1 from "../pics_compressed/DSC00706-min.jpg"
import picture2 from "../pics_compressed/DSC00778-min.jpg"
import picture3 from "../pics_compressed/DSC00828-min.jpg"
import picture4 from "../pics_compressed/DSC00851-min.jpg"
import picture5 from "../pics_compressed/DSC00854-min.jpg"
import picture6 from "../pics_compressed/DSC01264-min.jpg"
import picture7 from "../pics_compressed/DSC01273-min.jpg"
import picture8 from "../pics_compressed/DSC01529-min.jpg"
import picture9 from "../pics_compressed/DSC02248-min.jpg"
import picture10 from "../pics_compressed/DSC02393-min.jpg"
import picture11 from "../pics_compressed/DSC02541-min.jpg"
import picture12 from "../pics_compressed/DSC02619-min.jpg"
import picture13 from "../pics_compressed/DSC02643-min.jpg"
import picture14 from "../pics_compressed/DSC02666-min.jpg"
import picture15 from "../pics_compressed/DSC02700-min.jpg"
import picture16 from "../pics_compressed/DSC02735-min.jpg"
import picture17 from "../pics_compressed/DSC02769-min.jpg"
import picture18 from "../pics_compressed/DSC02945-min.jpg"
import picture19 from "../pics_compressed/DSC03012-min.jpg"
import picture20 from "../pics_compressed/DSC03053-min.jpg"
import picture21 from "../pics_compressed/DSC03126-min.jpg"
import picture22 from "../pics_compressed/DSC03189-min.jpg"
import picture23 from "../pics_compressed/DSC03204-min.jpg"
import picture24 from "../pics_compressed/DSC03295-min.jpg"
import picture25 from "../pics_compressed/DSC03312-min.jpg"
import picture26 from "../pics_compressed/DSC03323-min.jpg"
import picture27 from "../pics_compressed/DSC03324-min.jpg"
import picture28 from "../pics_compressed/DSC03330-min.jpg"
import picture29 from "../pics_compressed/DSC03344-min.jpg"
import picture30 from "../pics_compressed/DSC03471-min.jpg"
import picture31 from "../pics_compressed/DSC04532-min.jpg"
import picture32 from "../pics_compressed/DSC04564-min.jpg"
import picture33 from "../pics_compressed/DSC04647-min.jpg"
import picture34 from "../pics_compressed/DSC04660-min.jpg"
import picture35 from "../pics_compressed/DSC05060-min.jpg"
import picture36 from "../pics_compressed/DSC05169-2-min.jpg"
import picture37 from "../pics_compressed/DSC05212-min.jpg"
import picture38 from "../pics_compressed/DSC05253-min.jpg"
import picture39 from "../pics_compressed/DSC05398-min.jpg"
import picture40 from "../pics_compressed/DSC05405-min.jpg"
import picture41 from "../pics_compressed/DSC05462-min.jpg"
import picture42 from "../pics_compressed/DSC05648-min.jpg"
import picture43 from "../pics_compressed/DSC05692-min.jpg"
import picture44 from "../pics_compressed/DSC06026-min.jpg"
import picture45 from "../pics_compressed/DSC06143-min.jpg"
import picture46 from "../pics_compressed/DSC06211-min.jpg"
import picture47 from "../pics_compressed/DSC06214-min.jpg"
import picture48 from "../pics_compressed/DSC06216-min.jpg"
import picture49 from "../pics_compressed/DSC06514-min.jpg"
import picture50 from "../pics_compressed/DSC07846-min.jpg"
import picture51 from "../pics_compressed/DSC07867-min.jpg"
import picture52 from "../pics_compressed/DSC07950-min.jpg"
import picture53 from "../pics_compressed/DSC08154-min.jpg"
import picture54 from "../pics_compressed/DSC08197-min.jpg"
import picture55 from "../pics_compressed/DSC08934-min.jpg"
import picture56 from "../pics_compressed/DSC08935-min.jpg"
import picture57 from "../pics_compressed/DSC09083-min.jpg"
import picture58 from "../pics_compressed/DSC09109-min.jpg"
import picture59 from "../pics_compressed/DSC09742-min.jpg"


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
            alignItems="center"
            spacing={8}
            backgroundColor="#EAE7DC"
            color="black">
            <Heading as="h1" id="portfolio-section" color="#e85a4f" className="heading">
                Mein Portfolio
            </Heading>

                <Box
                    display={["90%", "90%", "grid", "grid"]}
                    gridTemplateColumns="repeat(3,minmax(min-content ,1fr))"
                    gridGap={10}
                    alignItems="center"
                >
                    {bilderVertikal.map((bild) =>
                    <Box>
                        <LazyLoadImage effect="blur" src={bild} />
                    </Box>
                    )}
                </Box>
                <Box
                    display={["90%", "90%", "grid", "grid"]}
                    gridTemplateColumns="repeat(2,minmax(min-content, 1fr))"
                    gridGap={10}
                    alignItems="center"
                >
                    {bilderHorizontal.map((bild) =>
                    <Box>
                        <LazyLoadImage effect="blur" src={bild} />
                    </Box>
                    )}
                </Box>

        </FullScreenSection>
    )
}

export default Portfolio