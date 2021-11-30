import React, { useState } from 'react';
import EntryDropdown from './EntryDropdown';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const buttonStyle = {
    borderRadius: 28
};

const lines = ["green", "red", "blue", "yellow", "pink"];

export default function Map() {

    const [currentLine, setCurrentLine] = useState("rick");

    const updateLine = (color) => {
        setCurrentLine(color)
    }

    return (
        <div>
            <Grid 
                container 
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Card sx={{ marginTop: 5 }}>
                    <CardMedia
                        component="img"
                        image={`/${currentLine}.jpg`}
                        alt="Paella dish"
                        sx={{
                            width: {xs: 400, sm: 600, lg: 1000}
                        }}
                    />
                </Card>

                <Stack direction="row" spacing={2} sx={{ marginTop: 5 }}>
                    {
                        lines.map((l)=> {
                            return (
                                <IconButton 
                                variant="contained" 
                                onClick={()=>updateLine(l)} 
                                sx={buttonStyle}>
                                    <CircleIcon fontSize="large" sx={{ color: l }}/>
                                </IconButton>
                            );
                        })
                    }

                </Stack>

                {
                    currentLine!=="rick"?
                    <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={15}
                    sx={{ marginTop: '10px' }}>
                        <Grid item 
                        justifyContent="center"
                        alignItems="center">
                            <EntryDropdown line={currentLine}  />
                        </Grid>

                        <Grid item 
                        justifyContent="center"
                        alignItems="center"
                        sx={{ width: '2rem' }}>
                            <ArrowRightAltIcon fontSize="large"/>
                        </Grid>

                        <Grid item 
                        justifyContent="center"
                        alignItems="center">
                            <EntryDropdown line={currentLine} />
                        </Grid>
                    </Grid>
                    :
                    <></>
                }
            </Grid>
        </div>
    )
}
