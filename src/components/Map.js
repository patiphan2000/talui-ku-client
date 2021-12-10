import React, { useState, useEffect, useRef } from 'react';
import {
    Link
  } from "react-router-dom";
import axios from 'axios';
import './Map.css'
import EntryDropdown from './EntryDropdown';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SendIcon from '@mui/icons-material/Send';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';


const buttonStyle = {
    borderRadius: 28
};

const lines = ["green", "red", "blue", "yellow", "pink"];

export default function Map() {

    const [currentLine, setCurrentLine] = useState("rick");
    const [taluiInfo, setTaluiInfo] = useState({
        entry: "station",
        dest: "station"
    })
    const [openAlert, setOpenAlert] = useState(false);

    const alertBox = useRef();

    const errorAlert = (
        <Alert severity="error"
        action={
            <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
                setOpenAlert(false);
            }}
            >
            <CloseIcon fontSize="inherit" />
            </IconButton>
        }
        sx={{ mb: 2 }}
        >
        <AlertTitle>Error</AlertTitle>
        invalid stations!!
        </Alert>
    )
    
    const successAlert = (
        <Alert severity="success"
        action={
            <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
                setOpenAlert(false);
            }}
            >
            <CloseIcon fontSize="inherit" />
            </IconButton>
        }
        sx={{ mb: 2 }}
        >
        <AlertTitle>Success</AlertTitle>
        your talui has been recorded!!
        </Alert>
    )

    const submitTaluiInfo = async () => {
        if (taluiInfo.entry === "station" || taluiInfo.dest === "station") {
            alertBox.current = (errorAlert);
            setOpenAlert(true);
            return;
        }
        if (taluiInfo.entry === taluiInfo.dest) {
            alertBox.current = (errorAlert);
            setOpenAlert(true);
            setTaluiInfo({ entry: "station", dest: "station" })
            return;
        }
        alertBox.current = (successAlert);
        setOpenAlert(true);
        setTaluiInfo({ entry: "station", dest: "station" })
        const res = await axios.post(process.env.REACT_APP_SERVER_URL + `on/insertTalui?entry=${taluiInfo.entry}&dest=${taluiInfo.dest}&line=${currentLine}`);
        console.log(res);
        return;
    }

    const getShowMapStatus = (line) => {
        if (currentLine === 'rick') { return 'show' }
        if (currentLine === line) {
            return 'show'
        }
        return 'hide'
    }

    const handleSelectLine = (line) => {
        if (currentLine === line) { 
            setCurrentLine('rick');
            return ;
        }
        setCurrentLine(line);
    }

    useEffect(() => {
        setTaluiInfo({
            entry: "station",
            dest: "station"
        })
    }, [currentLine])

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
                        className={`map-image ${getShowMapStatus('green')}`}
                        component="img"
                        image={`/green.png`}
                        alt="Paella dish"
                        sx={{
                            width: {xs: 400, sm: 600, lg: 1000}
                        }}
                    />
                    <CardMedia
                        className={`map-image ${getShowMapStatus('blue')}`}
                        component="img"
                        image={`/blue.png`}
                        alt="Paella dish"
                        sx={{
                            width: {xs: 400, sm: 600, lg: 1000}
                        }}
                    />
                    <CardMedia
                        className={`map-image ${getShowMapStatus('yellow')}`}
                        component="img"
                        image={`/yellow.png`}
                        alt="Paella dish"
                        sx={{
                            width: {xs: 400, sm: 600, lg: 1000}
                        }}
                    />
                    <CardMedia
                        className={`map-image ${getShowMapStatus('red')}`}
                        component="img"
                        image={`/red.png`}
                        alt="Paella dish"
                        sx={{
                            width: {xs: 400, sm: 600, lg: 1000}
                        }}
                    />
                    <CardMedia
                        className={`map-image ${getShowMapStatus('pink')}`}
                        component="img"
                        image={`/pink.png`}
                        alt="Paella dish"
                        sx={{
                            width: {xs: 400, sm: 600, lg: 1000}
                        }}
                    />
                    <CardMedia
                        component="img"
                        image={`/road.png`}
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
                                key={l}
                                variant="contained" 
                                onClick={() => {handleSelectLine(l)}} 
                                sx={buttonStyle}>
                                    <CircleIcon sx={{ 
                                        color: l,
                                        opacity: currentLine===l? '100%':'60%',
                                        fontSize: currentLine===l? '2.2rem':'2rem',
                                        transition: '0.2s ease'
                                        }}/>
                                </IconButton>
                            );
                        })
                    }

                </Stack>

                {
                    currentLine!=="rick" ?
                    <>
                    <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    spac
                    alignItems="center"
                    spacing={5}
                    sx={{ 
                        marginTop: '10px',
                        marginBottom: '20px'
                    }}>
                        <Grid item 
                        justifyContent="center"
                        alignItems="center">
                            <EntryDropdown line={currentLine} type="entry" talui={taluiInfo} setTalui={setTaluiInfo} />
                        </Grid>

                        <Grid item 
                        justifyContent="center"
                        alignItems="center"
                        sx={{ 
                            width: '2rem',
                            marginRight: '2rem'
                        }}>
                            <ArrowRightAltIcon fontSize="large"/>
                        </Grid>

                        <Grid item 
                        justifyContent="center"
                        alignItems="center">
                            <EntryDropdown line={currentLine} type="dest" talui={taluiInfo} setTalui={setTaluiInfo} />
                        </Grid>
                    </Grid>

                    <Collapse in={openAlert}>
                        {alertBox.current}
                    </Collapse>

                    <Button 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    onClick={submitTaluiInfo}
                    sx={{ marginTop: openAlert? '' : '2rem' }}>
                    Submit
                    </Button>
                    </>
                    :
                    <></>
                }
            </Grid>
        </div>
    )
}
