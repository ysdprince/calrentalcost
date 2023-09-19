function calculateRentalCost(carType, numDays) {
    // Define rental costs per day for each car type
    const rentalCosts = {
        'Economy': 4000,    // Rs. 4,000 per day
        'Midsize': 15000,   // Rs. 15,000 per day
        'Luxury': 20000     // Rs. 20,000 per day
    };

    // Check if the specified car type is valid
    if (carType in rentalCosts) {
        const costPerDay = rentalCosts[carType];
        const totalCost = costPerDay * numDays;
        return totalCost;
    } else {
        return "Invalid car type";
    }
}

// Example usage:
const carType = 'Economy';
const numDays = 5;
const totalRentalCost = calculateRentalCost(carType, numDays);
console.log(`Total rental cost for ${numDays} days of ${carType} car: Rs. ${totalRentalCost}/-`);


