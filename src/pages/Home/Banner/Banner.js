import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bike from '../../../img/bike.jpg';
import bg from '../../../img/bg.png';
import { Typography, Container } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={5}>
                    <Box>
                        <Typography variant="h6" sx={{ color: 'info.main' }}>
                            MAVIC MOTORS
                        </Typography>

                        <Typography variant="h6" color="gray" style={{ fontSize: 14 }} sx={{ m: 2 }}>
                            BikeDekho brings complete range of new bikes in India. You can search bikes by applying filters such as by budget, by preferred price, by bodytype, by brand, by engine cc and features.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} style={verticalCenter}>
                    <img style={{ width: 450 }} src={bike} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;