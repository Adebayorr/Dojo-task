import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

const RootLayout = () => {
    return ( 
        <Grid className="root-layout" gridTemplateColumns="repeat(6, 1fr)" bg="gray.50">
            <GridItem
            as="aside"
            bg="orange"
            minHeight={{xl:"100vh"}}
            colSpan={{base: "6", md: "2", lg: "1"}}
            p={{base:"20px", lg: "30px"}}>
                <Sidebar />
            </GridItem>
            <GridItem
            as="main"
            colSpan={{base: "6", md: "4", lg: "5"}}
            p={{base:"30px", lg: "40px"}}>
                <Navbar />
                <Outlet />
            </GridItem>
        </Grid>
     );
}
 
export default RootLayout;