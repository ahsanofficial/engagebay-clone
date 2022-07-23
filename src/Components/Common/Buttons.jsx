import { Button } from "@chakra-ui/react"
export default function Buttons({ bgColor, value }) {
  return (
    <>
      <Button mt={'3rem'} fontWeight={100} px={'3rem'} py={'1.5rem'} color={'white'} bgColor={bgColor}>{value}</Button>
    </>
  )
}