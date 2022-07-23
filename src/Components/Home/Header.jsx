import { Image, HStack, Box, Heading, Text } from "@chakra-ui/react"
import InputBox from './InputBox'
const Header = () => {
    return (
        <Box>
            <Heading textAlign={'center'} mx={'8rem'} pt={'5rem'} lineHeight={'5rem'} size='4xl'>Market better. Sell faster. Support smarter</Heading>
            <Text textAlign={'center'} my={'1rem'} fontSize='3xl'>One platform for all your Marketing, Sales, and Support teams</Text>
            <InputBox />
            <HStack gap={'10px'} m={'auto'} mt={'2rem'} w={'380px'} >
                <HStack m={'auto'} >
                    <Box h={'20px'} w={'20px'}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="check-circle-solid" role="img" viewBox="0 0 512 512">
                            <path fill="purple" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                        </svg>
                    </Box>
                    <Text>Free for 15 users</Text>
                </HStack>
                <HStack>
                    <Box h={'20px'} w={'20px'}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="check-circle-solid" role="img" viewBox="0 0 512 512">
                            <path fill="purple" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                        </svg>
                    </Box>
                    <Text>No credit card required</Text>
                </HStack>
            </HStack>
            <Image mt={'1rem'} src='https://cdn5.engagebay.com/new/assets/img/banner-image.svg' />
        </Box>
    )
}
export default Header

