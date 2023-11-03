import { ViewIcon } from "@chakra-ui/icons";
import {  Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Editable, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

const DashBoard = () => {
    const tasks = useLoaderData()
    console.log(tasks[0].img)
    return ( 
        <>
            <SimpleGrid minChildWidth="300px" spacing="5">
                {tasks && tasks.map(task => (
                    <Card key={task.id} borderTop={"8px"} borderColor={"orange"}>
                        <CardHeader>
                            <Flex gap={5}>
                                <Avatar src={`/src/${task.img}`}></Avatar>
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