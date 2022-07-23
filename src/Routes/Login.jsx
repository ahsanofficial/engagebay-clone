import {Stack} from '@chakra-ui/react';
import Auth from '../Components/Common/Auth'

const RightData={
    image:'https://cdn5.engagebay.com/img/testimonials/paul.jpeg',
    text:'I like how they give you access to all these marketing and CRM/sales features in one dashboard. It could easily replace a number of other tools you are using right now.',
    writer:'- Paul T, eMarketing Strategist, Paul Therond Consulting'
}
 
const LeftData={
    heading:'Login',
    user:['Username','Password'],
    button:'Login',
    text:`Don't have an account? Sign Up`
}

const Login = () => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
           <Auth LeftData={LeftData} RightData={RightData}/>
        </Stack>
    )
}
export default Login