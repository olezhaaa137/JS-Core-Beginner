function divideNumbers(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Ошибка: Второе число равно нулю");
    }

    return dividend / divisor;
}