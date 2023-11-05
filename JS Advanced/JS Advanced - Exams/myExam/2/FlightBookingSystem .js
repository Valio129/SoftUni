class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }
    // might need getter and setter for bookings count
    addFlight(flightNumber, destination, departureTime, price) {
        const arr = [flightNumber, destination, departureTime, price];

        price = Number(price);
        const currFlightObj = { flightNumber, destination, departureTime, price };
        if (this.flights.some(el => el.flightNumber === currFlightObj.flightNumber)) {
            return (`Flight ${flightNumber} to ${destination} is already available.`);
        }
        this.flights.push(currFlightObj);
        return (`Flight ${flightNumber} to ${destination} has been added to the system.`);

    }

    bookFlight(passengerName, flightNumber) {
        const arr = [passengerName, flightNumber];

        const currPassengerObj = { passengerName, flightNumber };
        if (this.flights.some(el => el.flightNumber === currPassengerObj.flightNumber) == false) {
            return (`Flight ${flightNumber} is not available for booking.`);
        }
        this.bookingsCount++;
        this.bookings.push(currPassengerObj);
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;

    } 
    cancelBooking(passengerName, flightNumber) {
        const arr = [passengerName, flightNumber];

        const currPassenger = { passengerName, flightNumber };
        if (this.bookings.some(el => el.flightNumber === currPassenger.flightNumber && el.passengerName == currPassenger.passengerName) == false) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }
        this.bookingsCount--;
        const found = this.bookings.find(e => e.passengerName === currPassenger.passengerName && e.flightNumber === currPassenger.flightNumber);
        this.bookings.splice(this.bookings.indexOf(found), 1);
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;

    }
    showBookings(criteria) {

        if (this.bookings.length > 0 && this.bookingsCount > 0) {
            const out = [];
            switch (criteria) {
                case 'all':
                    out.push(`All bookings(${this.bookingsCount}):`);
                    for (const { passengerName, flightNumber } of this.bookings) {
                        out.push(`${passengerName} booked for flight ${flightNumber}.`);
                    }
                    break;
                case 'cheap':
                    const cheapFlights = this.flights.filter(flight => flight.price <= 100);

                    if (cheapFlights.length > 0) {
                        for (const flight of cheapFlights) {

                            let cheapPassengers = [];
                            for (const booking of this.bookings) {
                                if (booking.flightNumber === flight.flightNumber) {
                                    cheapPassengers.push(booking);
                                }
                            }
                            if (cheapPassengers.length > 0) {
                                if (!out.includes(`Cheap bookings:`)) {
                                    out.push(`Cheap bookings:`);
                                }

                            }

                            if (cheapPassengers.length > 0) {
                                cheapPassengers.forEach(p => out.push(`${p.passengerName} booked for flight ${p.flightNumber}`));
                            }
                        }

                    } else {
                        return (`No cheap bookings found.`);
                    }
                    if (!out.includes('Cheap bookings:')) {
                        return (`No cheap bookings found.`);
                    }
                    break;
                case 'expensive':
                    const expensiveFlights = this.flights.filter(flight => flight.price > 100);

                    if (expensiveFlights.length > 0) {
                        for (const flight of expensiveFlights) {
                            let expensivePassengers = [];
                            for (const booking of this.bookings) {
                                if (booking.flightNumber === flight.flightNumber) {
                                    expensivePassengers.push(booking);
                                }
                            }
                            if (expensivePassengers.length > 0) {
                                if (!out.includes(`Expensive bookings:`)) {
                                    out.push(`Expensive bookings:`);
                                }
                            }
                            if (expensivePassengers.length > 0) {
                                expensivePassengers.forEach(p => out.push(`${p.passengerName} booked for flight ${p.flightNumber}`));
                            }
                        }

                    } else {
                        return (`No expensive bookings found.`);
                    }
                    if (!out.includes(`Expensive bookings:`)) {
                        return (`No expensive bookings found.`);
                    }
                    break;

                default:
                    return;
                    break;
            }
            return out.join('\n');

        } else {
            throw new Error(`No bookings have been made yet.`);
        }
    }
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("expensive"));
// console.log(system.showBookings("cheap"));


const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("", "", "",));
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 12));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.addFlight("BB203", "New YorKLK", "10:30 AM", 180));

console.log(system.bookFlight("Bob", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.bookFlight("Bob", "BB203"));

console.log(system.cancelBooking("Bob", "BB203"));
console.log(system.cancelBooking("Bob", "BB202"));
// console.log(system.cancelBooking("Bob", "AA101"));
console.log(system.showBookings("expensive"));




// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// // console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));


// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));


// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

