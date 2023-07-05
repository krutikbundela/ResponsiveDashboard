import React from 'react'
import Parties from './Components/Parties'
import Profile from './Components/Profile'
import TitleBar from './Components/TitleBar'
// import TitleBar from './Components/Titlebar'
import Transaction from './Components/Transaction'
import { Box, Grid } from '@mui/material'
// import { red, blue , pink, green, grey } from '@mui/material/colors';

const Screen = () => {
  return (
    <>
    <TitleBar/>
    {/* <TitleBar/> */}
    <Box>
    
        

    <Grid container spacing={2} m='auto' ml={-1}>
        <Grid item md={3} xs={12} >
           <Parties/>
        </Grid>

        <Grid item md={9} xs={12}>
                <Profile/>
                <Transaction/>
        </Grid>

    </Grid>

    </Box>
    </>
  )
}

export default Screen