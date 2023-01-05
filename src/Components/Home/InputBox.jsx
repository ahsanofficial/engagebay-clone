import { InputGroup, Input, InputRightElement, Button, } from "@chakra-ui/react"
import styled from './InputBox.module.css'

const InputBox = () => {
    return (
        <>
            <InputGroup className={styled.main}
                borderRadius={'50px'} size='xl' m={'auto'} mt={'3rem'} lineHeight={'70px'}  >
                <Input
                    focusBorderColor={'orange.500'}
                    borderColor={'orange.500'}
                    borderRadius={'50px'}
                    pl='2rem'
                    pr='4.5rem'
                    placeholder='Your email address'
                />
                <InputRightElement width='4.5rem'
                >
                    <Button h='1.75rem' size='4xl' focusBorderColor={'orange.500'}
                        mt={'10px'}
                        fontWeight={100}
                        mr={'75px'}
                        p={'25px'}
                        color={"white"}
                        bgColor={'orange.500'}
                        borderRadius={'50px'}>
                        Get Started
                    </Button>
                </InputRightElement>
            </InputGroup>
        </>
    )
}
export default InputBox