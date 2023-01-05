import { Image, HStack, Box, Text, Flex } from "@chakra-ui/react"
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import Footers from './Footers'
const Data = [
  {
    heading: 'Attract Web Visitors',
    text: [
      'Email Marketing',
      'Email Templates',
      'Email Broadcast',
      'Double Opt-In Email',
      'Autoresponder Email',
      'Email A/B Testing',
      'RSS-to-Email',
      'Show more'
    ]
  },
  {
    heading: 'Integrations',
    text: [
      'Zapier Integration',
      'Xero Integration',
      'Mailgun Integration',
      'Mandrill Integration',
      'Postmark Integration',
      'Sendgrid Integration',
      'PieSync Integration',
      'Show more'
    ]
  },
  {
    heading: 'Alternatives',
    text: [
      'Infusionsoft Alternative',
      'Drip Alternative',
      'ActiveCampaign Alternative',
      'Insightly Alternative',
      'Aweber Alternative',
      'HubSpot Alternative',
      'Agile CRM Alternative',
      'Show more'
    ]
  },
  {
    heading: 'Solutions',
    text: [
      'Wordpress Plugin',
      'Email Tracker',
      'Real Estate CRM',
      'CRM for Non-profits',
      'Call Center CRM',
      'Cloud CRM',
      'Developers',
      'Show more'
    ]
  },
  {
    heading: 'Sales & Engage Prospects',
    text: [
      'Email Sequences',
      'Web Forms',
      'Landing Pages',
      'Marketing Automation',
      'Push Notifications',
      'Video Marketing Templates',
      'Influencers',
      'Show more'
    ]
  }
]

const Footer = () => {
  return (
    <>
      <Box bgColor={'#4a61ca'} color={'white'}>
        <Flex flexDir={'row'} borderBottom={'1px solid black'} px={'4%'} m={'auto'} mt={'5rem'} flexWrap={'wrap'}  >
          {
            Data.map((e) => (
              <Footers heading={e.heading} text={e.text} />
            ))
          }
        </Flex>
        <Flex gap={'4rem'} px={'4rem'} py={'2rem'} flexWrap={'wrap'}>
          <Box>
            <Image h={'30px'} w={'200px'} src='https://cdn5.engagebay.com/new/assets/img/engagebay-logo-white.svg' />
            <Text pt={'0.7rem'}>One platform for all your Marketing, Sales, and Support teams.</Text>
            <Flex pt={'1.5rem'} gap={'1.5rem'}>
              <FcGoogle />
              <FaFacebook />
              <SiLinkedin />
              <Text>Legal | Terms of Service | Privacy Policy</Text>
            </Flex>
          </Box>
          <Box fontSize={'13px'} fontWeight={'2px'}>
            <Text>EngageBay Inc.,1007 North Orange Street 4th Floor #180 Wilmington, DE 19801</Text>
            <Text>support@engagebay.com , +1.(877).509.3570</Text>
            <Text>© EngageBay 2022. All Rights Reserved.</Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
export default Footer


