import {
    Image,
    Flex,
    Box,
} from "@chakra-ui/react"
import Card from './Card'
import MidHeadingText from '../Common/MidHeadingText'

const cardData = [
    {
        heading: 'CRM Software',
        text: 'Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place',
        image: 'https://cdn5.engagebay.com/new/assets/img/icons/crm.svg',
        lowerHeading: 'POPULAR FEATURES',
        ticksText: [
            'Contact Management',
            'Deal Management',
            'Sales Automation',
            'Appointment Scheduling'
        ]
    },
    {
        heading: 'Marketing Automation',
        text: 'Save time by automating your marketing processes and sending personalized messages to target audiences',
        image: 'https://cdn5.engagebay.com/new/assets/img/icons/marketing-automation.svg',
        lowerHeading: 'POPULAR FEATURES',
        ticksText: [
            'Forms & Landing Pages',
            'Email Sequences',
            'Marketing Automation',
            'Email Template Builder'
        ]
    },
    {
        heading: 'Helpdesk Software',
        text: 'Resolve queries faster and deliver exceptional support to delight your customers',
        image: 'https://cdn5.engagebay.com/new/assets/img/icons/helpdesk.svg',
        lowerHeading: 'POPULAR FEATURES',
        ticksText: [
            'Ticket Management',
            'Views',
            'Macro',
            'Ticket Automation'
        ]
    },
    {
        heading: 'Live Chat Software',
        text: 'Boost customer happiness and increase conversions by offering instant help when your customers need it',
        image: 'https://cdn5.engagebay.com/new/assets/img/icons/livechat.svg',
        lowerHeading: 'POPULAR FEATURES',
        ticksText: [
            'Instant Support',
            'Chat Form Customisation',
            'Shortcuts',
            'Notifications'
        ]
    },
]

const DataMidHeadingText = {
    heading: 'Single Solution for All Your Activities',
    text: 'Identify new opportunities, convert visitors, deliver customer happiness, and more!'
}

const CardSection = () => {
    return (
        <Box>
            <Flex justifyContent={'space-between'} flexWrap={"wrap"} borderBottom={'1px solid #dedfdf'} py={{ base: 16 }}
                mx={{ base: 16 }} >
                <Image src='https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png' />
                <Image src='https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png' />
                <Image src='https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png' />
                <Image src='https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png' />
                <Image src='https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png' />
                <Image src='https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png' />
                <Image src='https://cdn5.engagebay.com/new/assets/img/p-logos/business.png' />
            </Flex>

            <MidHeadingText heading={DataMidHeadingText.heading} text={DataMidHeadingText.text} />

            <Flex maxW={'90%'} m={'auto'} flexWrap={'wrap'}  >
                {
                    cardData.map((e) => (
                        <Card heading={e.heading} text={e.text} image={e.image} lowerHeading={e.lowerHeading} ticksText={e.ticksText} />)
                    )
                }
            </Flex>
        </Box>
    )
}
export default CardSection

