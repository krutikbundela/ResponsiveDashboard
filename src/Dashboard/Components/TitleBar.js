import React from 'react'
import {  Typography , Paper} from '@mui/material'

const TitleBar = () => {

  return (
    <>
    <Paper elevation={5}  sx={{
      backgroundColor:'#f5f5f5', 
      height:'4rem',
      width:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }}>

       <Typography variant="h6" component='h5'>
        Name
      </Typography>
      

    </Paper>
    
    </>
  )
}

export default TitleBar