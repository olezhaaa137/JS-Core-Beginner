function sumFirstHalf(numbers) {

    const length = numbers.length;

    const halfLength = Math.floor(length / 2);

    let sum = 0;

    for (let i = 0; i < halfLength; i++) {
        sum += numbers[i];
    }

    return sum;
}