import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <div className="side-bar">
        <List  color="#fff" spacing={4} fontSize="1.2rem">
            <ListItem>
                <NavLink to="/">
                    <ListIcon  as={CalendarIcon}/>
                    Dashboard
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to="/create">
                    <ListIcon  as={EditIcon}/>
                    New Task
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to="/profile">
                    <ListIcon  as={AtSignIcon}/>
                    Profile
                </NavLink>
            </ListItem>
        </List>
    </div>
  )
}

export default Sidebar