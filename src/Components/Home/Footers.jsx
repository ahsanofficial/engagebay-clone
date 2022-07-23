import { Text, Box } from "@chakra-ui/react"

const Footers = ({ heading, text }) => {
    const Data = []

    for (let i = 0; i < text.length; i++) {
        Data.push(
            <Text pt={'10px'} fontSize={'14px'}>{text[i]}</Text>
        )
    }
    return (
        <>
            <Box p={'2.5rem'}>
                <Text fontWeight={700} fontSize={'15px'}>{heading}</Text>
                <Box flexWrap={'wrap'}>{Data}</Box>
            </Box>
        </>
    )
}
export default Footers