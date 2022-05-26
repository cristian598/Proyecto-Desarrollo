import React from "react";
import { Grid } from "@mui/material";
import Options from "./components";

export default function Layout({ children }) {

    return (
        <Grid
            container
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex'
            }}
        >
            <Grid
                item
                xs={2}
            >
                <Options />
            </Grid>
            <Grid
                item
                xs={10}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {children}
            </Grid>
        </Grid>
    );
}