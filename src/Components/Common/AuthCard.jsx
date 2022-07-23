import {
    Box, FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'

export default function AuthCard({ LeftData, RightData }) {
    let arr = []
    for (let i = 0; i < LeftData.user.length; i++) {
        arr.push(<FormControl id="email">
            <FormLabel>{LeftData.user[i]}</FormLabel>
            <Input type="name" />
        </FormControl>)
    }
    return (
        <>
            <Box>
                {arr}
            </Box>
        </>
    )
}