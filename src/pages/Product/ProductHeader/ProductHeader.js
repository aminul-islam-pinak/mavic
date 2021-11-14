import { Container, Grid } from '@mui/material';
import React from 'react';
import bike3 from '../../../img/bike3.jpg';
import Calander from '../../../shared/Calander/Calander';

const ProductHeader = ({date,setDate}) => {
    
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Calander date={date} setDate={setDate}></Calander>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={bike3} ali=""/>
                   
                </Grid>

            </Grid>
        </Container>
    );
};

export default ProductHeader;