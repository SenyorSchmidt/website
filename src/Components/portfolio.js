import React from "react";
import { Avatar, Heading, Box, VStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./fullscreen";

const bilder = [
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0",
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0",
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0",
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0",
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0",
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0",
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0",
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0",
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0",
    "https://media.licdn.com/dms/image/D5612AQE8NiooxTxA3w/article-cover_image-shrink_720_1280/0/1695825196046?e=1722470400&v=beta&t=KcvxtMOAukvSZC06JVBFw67w7Ky_bRUC5XiGcBleKz0"
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
            <Heading as="h1" id="portfolio-section">
                Mein Portfolio
            </Heading>
            <Box
                display="grid"
                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridGap={10}
            >
                {bilder.map((bild) =>
                    <Image src={bild} boxSize='50vh' objectFit='cover'></Image>
                )}
            </Box>
        </FullScreenSection>
    )
}

export default Portfolio