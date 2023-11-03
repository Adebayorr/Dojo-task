import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

const Create = () => {
    return ( 
        <Box maxW={"450px"}>
            <Form method="post" action="/create">
                <FormControl mb="40px">
                    <FormLabel>Task name:</FormLabel>
                    <Input 
                    isRequired
                    placeholder="Enter task name"
                    name="title"
                    />
                    <FormHelperText>Enter a descriptive name for the task</FormHelperText>
                </FormControl>
                <FormControl mb="40px">
                    <FormLabel>Task description:</FormLabel>
                    <Textarea
                    isRequired 
                    placeholder="Enter a detailed and descriptive information about the task"
                    name="description"
                    />
                </FormControl>
                <FormControl mb="40px" display={'flex'} alignItems={'center'} gap={5}>
                    <Checkbox
                    colorScheme="yellow"
                    name="isPriority"
                    />
                    <FormLabel mb={0}>Make this a priority task</FormLabel>
                </FormControl>
                <Button type="submit">Submit</Button>
            </Form>
        </Box>
     );
}

export const createAction = async ({request}) => {
    const data = await request.formData()

    const submission = {
        title: data.get("title"),
        description: data.get("description"),
        isPriority: data.get("isPriority")  != null
    }
    console.log(submission)
    return redirect("/")
}
 
export default Create;