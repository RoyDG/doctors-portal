import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id:'6dvb4uh4bd67ddsjkds7dyu',
        id: 1,
        subject:'Teeth Orthodontics',
        visitingHour:'07:00 PM - 09:00 PM',
        totalSpace: 10
    },
        {
        _id:'6dvb4uh4bd67ddskjhds7dyu',
        id: 2,
        subject:'Cosmetic Dentistry',
        visitingHour:'08:00 AM - 10:00 AM',
        totalSpace: 10
    },
        {
        _id:'6dvb4uh4bd67ddlkkds7dyu',
        id: 3,
        subject:'Teeth Cleaning',
        visitingHour:'03:00 PM - 05:00 PM',
        totalSpace: 10
    },
        {
        _id:'6dvb4uh4bdtjddsjkds7dyu',
        id: 4,
        subject:'Cavity Protection',
        visitingHour:'05:00 PM - 07:00 PM',
        totalSpace: 10
    },
        {
        _id:'6dvb4uh4bd67ddsjj4s7dyu',
        id: 5,
        subject:'Teeth Orthodontics',
        visitingHour:'10:00 AM - 12:00 PM',
        totalSpace: 10
    },
        {
        _id:'6dvb4uh4jr67ddsjkds7dyu',
        id: 6,
        subject:'Teeth Orthodontics',
        visitingHour:'12:00 PM - 02:00 PM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className = "text-center text-info mb-5">
                Available Appointment on {date.toDateString()}
            </h2>

            <div className="row">
                {
                    bookingData.map(booking => <BookingCard
                        booking = {booking}
                        date = {date}
                        key = {booking.id}>

                    </BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;