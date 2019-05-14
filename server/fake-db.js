const Rental = require('./models/rental');

class FakeDb {
    constructor() {
        this.rentals = [
        {
            title: 'Nice view on ocean',
            city: 'San Francisco',
            street: 'Main street',
            category: 'condo',
            image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
            bedrooms: 4,
            shared: true,
            description: 'Very nice apartment in center of the city',
            dailyRate: 43 
        },
        {
            title: 'Modern apartment in center',
            city: 'New York',
            street: 'Time square',
            category: 'apartment',
            image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
            bedrooms: 1,
            shared: false,
            description: 'Very nice apartment in center of the city',
            dailyRate: 11 
        },
    ]
    }

    async cleanDb() {
        await Rental.remove({});
    }

    pushRentalsToDb() {
        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);
            newRental.save();
        })
    }
    
    seeDb() {
        this.cleanDb();
        this.pushRentalsToDb();
    }


}

module.exports = FakeDb;