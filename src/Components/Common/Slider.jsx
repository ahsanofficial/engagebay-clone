import { useState } from 'react'
import { Flex, Box, Stack, Text, Heading, Image, HStack } from '@chakra-ui/react'
import QuotesIcon from './QuotesIcon'
import MidHeadingText from './MidHeadingText';

export default function Slider() {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "black",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "black",
        },
    };
    const slides = [
        {
            img: "https://cdn.pixabay.com/photo/2017/08/20/10/47/grey-2661270__340.png",
            Logo: 'https://cdn5.engagebay.com/img/testimonials/shawn.jpeg',
            label: `"The software is easy to set up and implement. I feel EngageBay is quickly becoming a marketing automation competitor to the premium SAAS offerings. EngageBay's customer support has been very responsive and helped me resolve an implementation issue almost immediately."`,
            name: "Shawn L.",
            text: 'Marketing Manager, List Biological Laboratories, Inc'
        },
        {
            img: "https://cdn.pixabay.com/photo/2017/08/20/10/47/grey-2661270__340.png",
            Logo: 'https://cdn5.engagebay.com/img/testimonials/santiago.jpeg',
            label: `"A full-featured marketing platform. With this, you have all you need to get started and succeed. Having all in one platform make any marketer job much easier."`,
            name: "Santiago B.",
            text: 'Southern Europe Director, Triptease'
        },
        {
            img: "https://cdn.pixabay.com/photo/2017/08/20/10/47/grey-2661270__340.png",
            Logo: 'https://cdn5.engagebay.com/img/testimonials/leonard.jpeg',
            label: `"Engagebay works pretty well with my business. I was using ActiveCampaign but the costs were adding up quite quickly. I tried other platforms but the automation sequence offered by ActiveCampaign is not easy to find, until, I got Engagebay. The platforms offer an awesome automation platform for emails, plus landing pages and forms. It works quite well and can be a perfect substitute."`,
            name: "Leonardo W.",
            text: 'Founder, Wolff Consultoria'
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const setSlide = (slide) => {
        setCurrentSlide(slide);
    };

    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };
    return (
        <>
            <Heading pt={5} textAlign={'center'}>Client Testimonials</Heading>
            <Flex
                w="full"
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                alignItems="center"
                justifyContent="center"
            >
                <Flex w="full" pos="relative" overflow="hidden">
                    <Flex h="500px" w="full" {...carouselStyle}>
                        {slides.map((slide, sid) => (
                            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                                <Text
                                    color="black"
                                    fontSize="xs"
                                    p="8px 12px"
                                    pos="absolute"
                                    top="0"
                                >
                                    {sid + 1} / {slidesCount}
                                </Text>

                                <Image
                                    src={slide.img}
                                    alt="carousel image"
                                    boxSize="full"
                                    backgroundSize="cover"
                                />

                                <Stack
                                    p="8px 12px"
                                    pos="absolute"
                                    bottom="64px"
                                    textAlign="center"
                                    w="full"
                                    mb="8"
                                    color="black"
                                >
                                    <Box ml={'29rem'} mb={'10rem'}>
                                        <Box justifyContent={'center'} position={'absolute'} ml={'80px'}>
                                            <Image src={slide.Logo} borderRadius={'50%'} w={'145px'} h={'145px'} position={'relative'} />
                                            <QuotesIcon />
                                        </Box>
                                    </Box>
                                    <Text fontSize="2xl">{slide.label}</Text>
                                    <Heading fontSize="2xl">{slide.name}</Heading>
                                    <Text fontSize="lg">{slide.text}</Text>
                                </Stack>
                            </Box>
                        ))}
                    </Flex>
                    <Text {...arrowStyles} left="0" onClick={prevSlide}>
                        &#10094;
                    </Text>
                    <Text {...arrowStyles} right="0" onClick={nextSlide}>
                        &#10095;
                    </Text>
                    <HStack justify="center" pos="absolute" bottom="8px" w="full">
                        {Array.from({
                            length: slidesCount,
                        }).map((_, slide) => (
                            <Box
                                key={`dots-${slide}`}
                                cursor="pointer"
                                boxSize={["7px", null, "15px"]}
                                m="0 2px"
                                bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                                rounded="50%"
                                display="inline-block"
                                transition="background-color 0.6s ease"
                                _hover={{
                                    bg: "blackAlpha.800",
                                }}
                                onClick={() => setSlide(slide)}
                            ></Box>
                        ))}
                    </HStack>
                </Flex>
            </Flex>
            <MidHeadingText heading={'Do It All With EngageBay'} text={`Stop paying thousands of dollars to dozens of marketing, sales, and support software. Experience the world's most affordable, unified software. EngageBay's all-in-one CRM software is the most comprehensive solution for your business.`} />
        </>

    );
};
