module.exports = function toReadable(number) {
    let result = "";

    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number - hundreds * 100) / 10);
    const tensWithOnes = number - hundreds * 100;
    const ones = number - hundreds * 100 - tens * 10;

    if (hundreds !== 0) {
        const hundredsResult = getOnes(hundreds) + " hundred";
        result += hundredsResult;
        if (tensWithOnes >= 10 && tensWithOnes < 20) {
            result += " " + getNumFrom10Till19(tensWithOnes);
        } else if (tens === 0 && ones !== 0) {
            result += " " + getOnes(ones);
        } else if (ones === 0 && tens !== 0) {
            result += " " + getTens(tens);
        } else if (ones !== 0 && tens !== 0) {
            result += " " + getTens(tens) + " " + getOnes(ones);
        }
    } else if (tens !== 0) {
        if (tensWithOnes >= 10 && tensWithOnes < 20) {
            result += getNumFrom10Till19(tensWithOnes);
        } else if (ones === 0) {
            result += getTens(tens);
        } else {
            result += getTens(tens) + " " + getOnes(ones);
        }
    } else {
        result += getOnes(ones);
    }

    return result;
};
function getOnes(num) {
    switch (num) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        default:
            return "";
    }
}
function getNumFrom10Till19(num) {
    switch (num) {
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 18:
            return "eighteen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        default:
            return "";
    }
}
function getTens(num) {
    switch (num) {
        case 2:
            return "twenty";
        case 3:
            return "thirty";
        case 4:
            return "forty";
        case 5:
            return "fifty";
        case 6:
            return "sixty";
        case 7:
            return "seventy";
        case 8:
            return "eighty";
        case 9:
            return "ninety";
        default:
            return "";
    }
}
