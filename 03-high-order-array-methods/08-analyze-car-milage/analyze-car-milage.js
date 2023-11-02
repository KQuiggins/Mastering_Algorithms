function analyzeCarMileage(cars) {
    // calculate the average mileage of all cars
    // find car with highest mileage
    // find car with lowest mileage
    // total mileage of all cars combine

    const totalMileage = cars.reduce((sum, car) => {
        return sum + car.mileage;
    }, 0);

    const averageMileage = totalMileage / cars.length;

    const highestMileageCar = cars.reduce((highest, car) => (car.mileage > highest.mileage ? car : highest), cars[0])

    const lowestMileageCar = cars.reduce((lowest, car) => (car.mileage < lowest.mileage ? car : lowest), cars[0])



    return {
        averageMileage: parseFloat(averageMileage.toFixed(2)),
        highestMileageCar,
        lowestMileageCar,
        totalMileage

    };
}



module.exports = analyzeCarMileage;
