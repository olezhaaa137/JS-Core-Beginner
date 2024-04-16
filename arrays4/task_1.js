function increaseByTenPercent(numbers) {
   
    const increasedNumbers = [];

    
    for (let number of numbers) {
        
        const increasedNumber = number * 1.1;
        increasedNumbers.push(increasedNumber);
    }

    
    return increasedNumbers;
}