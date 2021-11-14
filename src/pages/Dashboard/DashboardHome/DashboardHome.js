import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calander from '../../../shared/Calander/Calander';
import Order from '../Order/Order';


const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Calander
                    date={date}
                    setDate={setDate}
                ></Calander>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Order
                    date={date}
                ></Order>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;