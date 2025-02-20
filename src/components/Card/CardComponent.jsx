import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function CardComponent() {
  return (
            <Card variant= 'none' sx={{width:'400px',height:'80px',borderRadius:'10px',backgroundColor:'#A0ECB1',padding:"0px" }}>
                <CardContent sx={{ padding:'0px' ,width:'100%',}}>
                    <Typography variant="h5">
                        Solid Card
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description of the card.Incididunt enim ad ollit proident. 
                    </Typography>
                </CardContent>
            </Card>
     )
}

