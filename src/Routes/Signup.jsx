import { Stack } from '@chakra-ui/react';
import Auth from '../Components/Common/Auth'

const RightData = {
    image: 'https://cdn5.engagebay.com/img/testimonials/ivana.jpeg',
    text: `This product is just like HubSpot. I cannot believe the price, so far I've used it for 2 weeks and those guys have added 2 features more.`,
    writer: '- Ivana B, Founder, New Marketing Agency'
}

const LeftData = {
    heading: 'Get Started for FREE',
    user: ['name', 'Username', 'Website URL', 'Password'],
    button: 'Sign Up',
    text: 'already have an account? Sign In'
}

const Signup = () => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
            <Auth LeftData={LeftData} RightData={RightData} />
        </Stack>
    )
}
export default Signup