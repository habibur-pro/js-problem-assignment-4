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
// const gameREsult = mindGame([5])
// console.log(gameREsult)



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
// const evenResult = evenOdd('chatgpt')
// console.log(evenResult)



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

// const biyogfol = isLGSeven(30)
// console.log(biyogfol)

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
const numbersArray = [1, 2, -6, - 9, -5, -33, -55, -9, -1, -0];
const badData = findingBadData(numbersArray)
console.log(badData)





function gemsToDiamond(fr1Gems, fr2Gems, fr3Gems) {
    if (
        typeof fr1Gems !== 'number' || fr1Gems < 1 ||
        typeof fr2Gems !== 'number' || fr2Gems < 1 ||
        typeof fr3Gems !== 'number' || fr1Gems < 1) {
        return 'input should be a number greater than 0'
    }
    const friend1Diamonds = fr1Gems * 21;
    const friend2Diamonds = fr2Gems * 32;
    const friend3Diamonds = fr3Gems * 43;
    const totalDiamonds = friend1Diamonds + friend2Diamonds + friend3Diamonds;
    if (totalDiamonds >= 1000 * 2) {
        const restDiamond = totalDiamonds - 2000;
        return restDiamond
    }
    else {
        return totalDiamonds
    }
}
// const diamond = gemsToDiamond(100, 5, 1)
// console.log(diamond)