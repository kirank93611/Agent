import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';

const bull=(
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)
export default function CardBox() {
  return (
    <Card sx={{ width: 600, height:500}}>
    <CardContent>
      <input style={{position:"relative", marginTop:"400px", width:"50%", border:"20%",borderRadius:"8px",boxShadow:"20%"}}></input>
    </CardContent>
    </Card>
     
  )
}
