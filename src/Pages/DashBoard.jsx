import { ViewIcon } from "@chakra-ui/icons";
import {  Box, Button, Card, CardBody, CardFooter, CardHeader, Editable, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

const DashBoard = () => {
    const tasks = useLoaderData()
    console.log(tasks)
    return ( 
        <>
            <SimpleGrid minChildWidth="300px" spacing="5">
                {tasks && tasks.map(task => (
                    <Card key={task.id}>
                        <CardHeader>
                            <Flex gap={5}>
                                <Box w="50px" h="50px">AV</Box>
                                <Box>
                                    <Heading as="h3" fontSize='sm'>{task.title}</Heading>
                                    <Text>{task.author}</Text>
                                </Box>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>{task.description}</Text>
                        </CardBody>
                        <CardFooter>
                            <HStack spacing={15}>
                                <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                                <Button variant="ghost" leftIcon={<Editable />}>Comment</Button>
                            </HStack>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </>
        
     );
}
 

export const dashBoardLoader = async () => {
    const res = await fetch("http://localhost:3000/tasks")
    
    return res.json()
        
    }

export default DashBoard;