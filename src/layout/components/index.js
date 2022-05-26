import React, { useContext } from "react";
import {
    Avatar,
    Box, Drawer, List, ListItem, ListItemText, Typography
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { userContext } from "../../context/authContext";

export default function Options() {

    const { logOut } = useContext(userContext)
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error.message)
        }
    }

    const pages = [
        {
            title: "Ver productos",
            link: "table"
        },
        {
            title: "Agregar producto",
            link: "add"
        }
    ]

    return (
        <Drawer
            anchor="left"
            open
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    width: 220,
                }
            }}
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 5
            }}>
                <Avatar />
                <Typography
                    onClick={handleLogout}
                    sx={{
                        ml: 2,
                        fontSize: 13,
                        ':hover': {
                            cursor: 'pointer'
                        }
                    }}
                >
                    Log Out
                </Typography>
            </Box>
            <List>
                {pages.map((page, index) => (
                    <Box
                        key={index}
                    >
                        <ListItem
                            button
                            onClick={() => { navigate(page.link) }}
                        >
                            <ListItemText
                                primary={page.title}
                            />
                        </ListItem>
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}