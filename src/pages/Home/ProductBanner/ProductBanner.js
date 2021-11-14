import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bike1 from '../../../img/bike1.jpg';
import { Button } from '@mui/material';




const ProductBanner = () => {
    return (
        <Box sx={{ flexGrow: 1, m: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400 }}
                        src={bike1} at="" />
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'

                    }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ m: 2, color: 'info.main' }} >
                            New Bikes in Bangladesh
                        </Typography>
                        <Typography variant="h6" sx={{ m: 2 }} >
                            Presenting India Ka Bike | India's Fastest Bike Ever
                        </Typography>
                        <Typography variant="h6" color="text.secondary" style={{ fontSize: 14 }} sx={{ m: 2 }}>
                            BikeDekho brings complete range of new bikes in India. You can search bikes by applying filters such as by budget, by preferred price, by bodytype, by brand, by engine cc and features.
                        </Typography>
                        <Button variant="contained">Buy Now</Button>
                    </Box>

                </Grid>

            </Grid>
        </Box>
    );
};

export default ProductBanner;