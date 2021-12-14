import React from 'react';
import { Navigate } from 'react-router';
import { Button, Grid } from '@material-ui/core';
import { Stack } from '@mui/material';

export default function Producer(){
  return(
    <Grid
    container
    >
    <Stack spacing={2}>
    <Button
    variant="contained" 
    style={{ display: "flex",  width: "10vw", height: "10vh", backgroundColor: "blue", borderRadius: "50%" }}
    >
    <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}>Producer 1</p>
    </Button>
    <Button 
    variant="contained"
    style={{ display: "flex",  width: "10vw", height: "10vh", backgroundColor: "blue", borderRadius: "50%" }}
    >
    <p style={{ color: "white", textalign: "center", verticalalign: "middle", lineheight: "10vh" }}>Producer 2</p>
    </Button>
    </Stack>
    </Grid>
  )
}