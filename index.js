function mindGame(number) {
    if (typeof number !== 'number' || number < 1) {
        return 'input should be a number greater than 1'
    }
    const multiply = number * 3;
    const addition = multiply + 10;
    const division = addition / 2;
    const result = division - 5;
    return result;
}
// const gameREsult = mindGame(50)
// console.log(gameREsult)



function evenOdd(str) {
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
    if (typeof number !== 'number') {
        return 'input should be a number'
    }
    const subtraction = number - 7;
    if (subtraction > 7) {
        const double = subtraction * 2;
        return double;
    }
    else {
        return subtraction;
    }

}

// const biyogfol = isLGSeven(13)
// console.log(biyogfol)

function findingBadData(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'input should be a array of number'
    }

    let negativeData = 0
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        if (number < 1) {
            negativeData++
        }
    }
    return negativeData
}
const numbersArray = [1, 2, -6, - 9, -5, -33, -55, -9]
const obj = { name: 'fd' }
const badData = findingBadData(numbersArray)
console.log(badData)