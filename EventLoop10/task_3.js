function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
}

function delayedPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = generateRandomNumber();
        console.log("Сгенерированное число:", randomNumber);

        setTimeout(() => {
            if (randomNumber >= 1 && randomNumber <= 5) {
                resolve("Промис выполнен успешно");
            } else {
                reject(new Error("Промис выполнен с ошибкой"));
            }
        }, randomNumber * 1000); 
    });
}