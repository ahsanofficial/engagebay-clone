import Navbar from '../Components/Home/Navbar'
import Header from '../Components/Home/Header'
import CardSection from '../Components/Home/CardSection'
import { Container } from '@chakra-ui/react'
import HappyCustomers from '../Components/Home/HappyCustomers'
import { Box } from '@chakra-ui/react'
import Slider from '../Components/Common/Slider'
import Footer from '../Components/Home/Footer'

const Home = () => {
    return (
        <Container maxW={'container.2xl'} p={0} m={0}>
            <Box background={'linear-gradient(234deg, #e9cfb9, #f0decc, #f8f2dd, #fff5f5 )'}>
                <Navbar />
                <Header />
            </Box>
            <CardSection />
            <HappyCustomers />
            <Slider />
            <Footer />
        </Container>
    )
}
export default Home