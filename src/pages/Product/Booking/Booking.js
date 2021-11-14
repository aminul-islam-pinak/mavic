import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import BookingModal from '../Product/BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { model, img, customer } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'info.main' }}>
                                {model}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: 12, color: 'gray' }}>
                                {customer}
                            </Typography>
                            <Button onClick={handleOpen} variant="contained">Buy Now</Button>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                open={open}
                handleClose={handleClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>

    );
};

export default Booking;