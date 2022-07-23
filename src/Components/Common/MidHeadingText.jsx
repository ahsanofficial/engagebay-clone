import {
    Heading,
    Text,
    Box,
} from "@chakra-ui/react"
const MidHeadingText = ({ heading, text }) => {
    return (
        <>
            <Box pt={'4rem'} lineHeight={'5rem'} >
                <Heading size='xl' textAlign={'center'} pb={'0.5rem'}>{heading}</Heading>
                <Text w={'60%'} textAlign={'center'} m={'auto'} fontSize='xl' color='#677294' lineHeight={'2rem'}>{text}</Text>
            </Box>
        </>
    )
}
export default MidHeadingText