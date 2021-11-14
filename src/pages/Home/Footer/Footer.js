import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';




const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'text.secondary' }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Typography variant="h4" style={{ color: 'white' }}>
                        Mavic

                    </Typography>
                    <Typography style={{ color: 'white' }}>

                        <p> mavic Pvt. Ltd.<br />
                            Senpara, Dhaka <br />
                            West Ukill Para, Bangladesh<br />
                            Pin: 700XXX<br />
                            Phone: +91 9xxxxxxxx<br />
                            Email: example@domain.com</p>
                        
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography varient="h5" style={{ textAlign: 'center', color: 'white' }}>
                        About Mavic Motor's<br />
                        <p style={{color:'black'}}>Mavic motorcycles have been a mainstay of the Honda Motor Company since 1955. The Honda Super Cub is its most popular and longest-running model, having been produced since 1958 with a total, to-date run of well over 100 million units, making it the most produced motor vehicle ever.</p>
                       
                    </Typography>


                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;