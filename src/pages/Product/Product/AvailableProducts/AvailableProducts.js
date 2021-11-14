import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../../Booking/Booking';



const bookings = [
    {
        "key": 1,
        "model": "Bajaj Pulsar",
        "img": "https://cdn.autoportal.com/bp-v3/img/models/1b/a/yamaha-yzf-r1-2018-1513151262.jpeg",
        "customer": "4 pis stoke"

    },
    {
        "key": 2,
        "model": "Bajaj Pulsar",
        "img": "https://cdn.autoportal.com/bp-v3/img/models/1b/a/yamaha-yzf-r1-2018-1513151262.jpeg",
        "customer": " 7 pis stoke"

    },
    {
        "key": 3,
        "model": "Bajaj Pulsar",
        "img": "https://cdn.autoportal.com/bp-v3/img/models/1b/a/yamaha-yzf-r1-2018-1513151262.jpeg",
        "customer": " 5 pis stoke"


    },
    {
        "key": 4,
        "model": "Bajaj Pulsar",
        "img": "https://cdn.autoportal.com/bp-v3/img/models/1b/a/yamaha-yzf-r1-2018-1513151262.jpeg",
        "customer": "3 pis stoke"


    },
    {
        "key": 5,
        "model": "Bajaj Pulsar",
        "img": "https://cdn.autoportal.com/bp-v3/img/models/1b/a/yamaha-yzf-r1-2018-1513151262.jpeg",
        "customer": "10 pis stoke"


    },
    {
        "key": 6,
        "model": "Bajaj Pulsar",
        "img": "https://cdn.autoportal.com/bp-v3/img/models/1b/a/yamaha-yzf-r1-2018-1513151262.jpeg",
        "customer": "4 pis stoke"

    }
]

const AvailableProducts = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography varient="h3" sx={{ color: 'info.main', mb: 3 }}>
                Your Products Delivary on {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success"> Buy Successfully.</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableProducts;