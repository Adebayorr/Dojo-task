import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";

const Profile = () => {
    return ( 
        <div className="profile">
            <Tabs  variant="enclosed" colorScheme="yellow">
                <TabList>
                    <Tab _selected={{bg: "orange", color: "#fff"} } >Profile Tab</Tab>
                    <Tab _selected={{bg: "orange", color: "#fff"} } >Task History</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <List>
                            <ListItem mb="0.3rem">
                                <ListIcon as={EmailIcon}/>
                                adebayorr@gmail.com
                            </ListItem>
                            <ListItem mb="0.3rem">
                                <ListIcon as={ChatIcon} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat sunt.
                            </ListItem>
                            <ListItem mb="0.3rem">
                                <ListIcon as={StarIcon}/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat sunt.
                            </ListItem>
                        </List>
                    </TabPanel>
                    <TabPanel>
                        <List>
                            <ListItem mb="0.3rem">
                                <ListIcon as={CheckCircleIcon} color={"teal.400"}/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium magni adipisci!
                            </ListItem>
                            <ListItem mb="0.3rem">
                                <ListIcon as={CheckCircleIcon} color={"teal.400"}/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium magni adipisci!
                            </ListItem>
                            <ListItem mb="0.3rem">
                                <ListIcon as={WarningIcon} color={"red.400"}/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium magni adipisci!
                            </ListItem>
                            <ListItem mb="0.3rem">
                                <ListIcon as={CheckCircleIcon} color={"teal.400"}/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium magni adipisci!
                            </ListItem>
                            <ListItem mb="0.3rem">
                                <ListIcon as={WarningIcon} color={"red.400"}/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium magni adipisci!
                            </ListItem>
                        </List>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
     );
}
 
export default Profile;