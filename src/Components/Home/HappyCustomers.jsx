import {
    Flex, Image, Heading, Box, SimpleGrid
} from "@chakra-ui/react"
import MidHeadingText from '../Common/MidHeadingText'

const Data = [
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_AsiaPacific_HighPerformer.svg',
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Europe_HighPerformer.svg',
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_HighPerformer.svg',
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Small-Business_HighPerformer.svg',
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_MomentumLeader_Leader.svg',
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_HighPerformer.svg',
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Mid-Market_HighPerformer.svg',
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Small-Business_HighPerformer.svg',
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/HelpDesk_EasiestAdmin_EaseOfAdmin.svg',
    'https://cdn5.engagebay.com/new/assets/img/Awards-2022/OnlineFormBuilder_FastestImplementation_Small-Business_GoLiveTime.svg'
]

const DataMidHeadingText = {
    heading: 'Create Your Own Views',
    text: 'From identifying new opportunities to delivering customer happiness'
}

const HappyCustomers = () => {
    const customer = []
    for (let i = 0; i < Data.length; i++) {
        customer.push(<Image h={'128px'} w={'99px'} src={Data[i]} />)
    }
    return (
        <>
            <Box bgColor={'#2f5bbf'} mt={'6rem'} py={'5rem'} >
                <Heading mb={'2.5rem'} color={'white'} fontSize={'2xl'} as={'h4'} textAlign={'center'}>HAPPY CUSTOMERS SHARE GREAT REVIEWS ON G2</Heading>
                <SimpleGrid columns={[2, 4, 6, 10]} justifyContent={'space-evenly'} alignItems={'center'} m={'auto'} w={'90%'}>
                    {customer}
                </SimpleGrid>
            </Box>
            <MidHeadingText heading={DataMidHeadingText.heading} text={DataMidHeadingText.text} />
        </>
    )
}
export default HappyCustomers