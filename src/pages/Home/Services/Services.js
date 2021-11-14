import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import spair from '../../../img/spair.png';
import speed from '../../../img/speed.png';
import tire from '../../../img/tire.png';

const services = [
    {
        "name": "Repair",
        "description": "Maintenance management is an important component of a well-functioning production. It helps companies maintain their resources while controlling time and costs to ensure maximum efficiency of the manufacturing process, the utilities and related facilities.",
        "img": spair

    },
    {
        "name": "Speed",
        "description": "Maintenance management is an important component of a well-functioning production. It helps companies maintain their resources while controlling time and costs to ensure maximum efficiency of the manufacturing process, the utilities and related facilities.",
        "img": speed

    },
    {
        "name": "Tire sales",
        "description": "Maintenance management is an important component of a well-functioning production. It helps companies maintain their resources while controlling time and costs to ensure maximum efficiency of the manufacturing process, the utilities and related facilities.",
        "img": tire


    }


]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h5" component="div">
                    Features
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;