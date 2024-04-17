function validateInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error("Ошибка: Введенное значение не является целым числом");
    }
}