function sumFirstAndLastDigits(number) {
    
    const numberString = number.toString();

   
    const firstDigit = parseInt(numberString.charAt(0));


    const lastDigit = parseInt(numberString.charAt(numberString.length - 1));

   
    const sum = firstDigit + lastDigit;


    console.log(sum);
}