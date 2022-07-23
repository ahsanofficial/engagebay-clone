import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Box,
    Text,
    Image,
    VStack,
} from '@chakra-ui/react';
import AuthCard from './AuthCard'
import SiteLogo from './SiteLogo'
import Buttons from "./Buttons"
import AuthText from "./AuthText"

const Auth = ({ LeftData, RightData }) => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
            <Flex p={10} w={'33%'} align={'center'} justify={'center'} >

                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Flex justifyContent={'center'} >
                        <SiteLogo />
                    </Flex>
                    <Text textAlign={'center'} fontSize={'3xl'}>{LeftData.heading}</Text>

                   <AuthCard LeftData={LeftData} RightData={RightData} />
                    <Stack spacing={6}>
                        <Buttons bgColor={'#fb7241'} value={LeftData.button} />
                        <AuthText value={LeftData.text} />
                    </Stack>
                </Stack>
            </Flex>
            <VStack background={'linear-gradient(134deg, #2b5cc2, #396dd5, #4ccfe2)'} w={'66%'}>
                <Flex borderRadius={'5px'} p={2} ml={20} mr={5} mt={10} background={'linear-gradient(95deg, #2b5cc2, #396dd5, #72afe9)'} >
                    <Image borderRadius={'50%'} border={'4px solid #396dd5'} mr={7} h={'70px'} w={'70px'} src={RightData.image} />
                    <Box pr={5} color={'white'} fontWeight={'thin'} >
                        <Text pr={3}>{RightData.text}</Text>
                        <Text fontStyle={'italic'} textAlign={'right'}>{RightData.writer}</Text>
                    </Box>
                </Flex>
                <Box
                    h={'550px'}
                    w={'550px'}
                    alt={'Login Image'}
                    bgImage={'https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/login-image.svg'}
                    bgPosition={'center'}
                    bgRepeat={'no-repeat'}
                >
                </Box>
            </VStack>
        </Stack>
    );
}
export default Auth