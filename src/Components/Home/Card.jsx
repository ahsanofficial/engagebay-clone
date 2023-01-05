import {
    Heading,
    Text,
    HStack,
    Flex,
    Image, Box, Container
} from "@chakra-ui/react"
import TickLogo1 from "../Common/TickLogo1"
import Buttons from "../Common/Buttons"
import styled from "./Card.module.css"

const Card = ({ heading, text, image, lowerHeading, ticksText }) => {
    const ticksData = []

    for (let i = 0; i < ticksText.length; i++) {
        ticksData.push(<Flex w={'50%'} mt={'1rem'} gap={'0.5rem'}>
            <TickLogo1 />
            <Text>{ticksText[i]}</Text>
        </Flex>)
    }
    return (
        <>
            <Container borderRadius={20} border={'1px solid #dedfdf'} mt={'2rem'} px={'3rem'} py={'4rem'}>
                <HStack gap={'3rem'} borderBottom={'1px solid #dedfdf'} pb={'4rem'} >
                    <Box>
                        <Heading size='md' >{heading}</Heading>
                        <Text fontSize='md' mt={'20px'} color='#677294'>{text}</Text>
                    </Box>
                    <Image className={styled.img} src={image} />
                </HStack>

                <Heading size='sm' mt={'2rem'} mb={'1.5rem'}>{lowerHeading}</Heading>
                <Flex flexWrap={'wrap'}>{ticksData}</Flex>
                <Buttons bgColor={'#6957b3'} value={'Get started'} />
            </Container>
        </>
    )
}
export default Card