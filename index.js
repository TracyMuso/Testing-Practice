const stringLength = (string) => {
    if (string.trim().length > 0 && string.trim().length <10) {
    return string.trim().length
    }
    throw new Error('Oops, does not meet requirements!')
};

const reverseString = (string) => {
    return string.split('').reverse().join
}

module.exports = stringLength;
module.exports = reverseString;