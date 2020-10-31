export const getArrayOfRandomNumbers = (length = 100, max = 150): number[] => {
    return [...new Array(length)].map(() => Math.round(Math.random() * max))
}