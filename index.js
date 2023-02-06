function mindGame(number) {
    // Description:This function receives a number, multiplies that number by 3, then adds 10, then divides by 2, then subtracts 5 from the quotient and returns the subtraction.
    if (typeof number !== 'number' || number < 1) {
        return 'input should be a number greater than 1'
    }
    const multiply = number * 3;
    const addition = multiply + 10;
    const division = addition / 2;
    const result = division - 5;
    return result;
}

function evenOdd(str) {
    // Description: This function takes a string as a parameter  then extracts the number of characters from that string, if the number of characters is even then it will return even and if it is odd then it will return odd.
    if (typeof str !== 'string' || str.length < 1) {
        return 'input should be a string and null string not allowed'
    }
    const character = str.length;
    if (character % 2 === 0) {
        return 'even'
    }
    else {
        return 'odd'
    }
}

function isLGSeven(number) {
    // Description:This function takes a number as a parameter and returns the difference with 7. If the difference is less than 7 it will return that difference and if the difference is greater than 7 then it will return double the difference.
    if (typeof number !== 'number') {
        return 'input should be a number'
    }
    const subtraction = number - 7;
    if (subtraction < 7) {
        return subtraction;

    }
    else {
        const double = number * 2;
        return double;
    }

}

function findingBadData(numbers) {
    // Description: This function accepts an array of numbers as a parameter, then counts the negative (less than 0) numbers from that array and returns that count.
    if (Array.isArray(numbers) === false) {
        return 'input should be an array '

    }
    else {
        for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] !== 'number') {
                return 'array items should be a number'
            }

        }
    }

    let negativeNumber = 0
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        if (number < 0) {
            negativeNumber++
        }
    }
    return negativeNumber
}

function gemsToDiamond(fr1Gems, fr2Gems, fr3Gems) {
    // Description: This function will take the gems of 3 friends as parameters. Then each friend will calculate how many diamonds they can take. If the diamond of 3 of them is equal to or more than twice 1000 then subtract 2000 from there and return the subtraction result. And if less than double of 1000 then only 3 will return total number of diamonds
    if (
        typeof fr1Gems !== 'number' || fr1Gems < 1 ||
        typeof fr2Gems !== 'number' || fr2Gems < 1 ||
        typeof fr3Gems !== 'number' || fr3Gems < 1) {
        return 'input should be a number greater than 0'
    }
    const friend1Diamonds = fr1Gems * 21;
    const friend2Diamonds = fr2Gems * 32;
    const friend3Diamonds = fr3Gems * 43;
    const totalDiamonds = friend1Diamonds + friend2Diamonds + friend3Diamonds;
    if (totalDiamonds < 1000 * 2) {
        return totalDiamonds

    }
    else {
        const restDiamond = totalDiamonds - 2000;
        return restDiamond
    }
}


