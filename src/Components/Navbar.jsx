import { UnlockIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react"

function Navbar() {
  const toast = useToast()

  const setToast = function () {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      status: "success",
      position: "top",
      isClosable: "true",
      icon: <UnlockIcon />
      
    })
  }
  return (
    <Flex p="1rem 2rem" mb="2.5rem">
        <Heading>Dojo Task</Heading>

        <Spacer />

        <HStack spacing="3">
            <Box p="0.2rem 0.5rem" bg="gray.300">B</Box>
            <Text>adebayorr@gmail.com</Text>
            <Button colorScheme="yellow" onClick={setToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}

export default Navbar