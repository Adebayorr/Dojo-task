import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react"

function Navbar() {
  return (
    <Flex p="1rem 2rem" mb="2.5rem">
        <Heading>Dojo Task</Heading>

        <Spacer />

        <HStack spacing="3">
            <Box p="0.2rem 0.5rem" bg="gray.300">B</Box>
            <Text>adebayorr@gmail.com</Text>
            <Button colorScheme="yellow">Logout</Button>
        </HStack>
    </Flex>
  )
}

export default Navbar