import { Text, Box } from "@chakra-ui/react"
export default function Buttons({ value }) {
    return (
        <>
            <Box textAlign={'center'} fontSize={14} fontWeight={'lighter'} lineHeight={'1.5rem'}>
                <Text>Forgot Password?</Text>
                <Text>{value}</Text>
                <Text>Privacy Policy</Text>
            </Box>
        </>
    )
}