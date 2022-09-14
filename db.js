const axios = require('axios')


function doSum(a, b) {
    let sum = Number(a) + Number(b);
    return sum
}

async function sendNumbers(url) {
    return axios.get(url)
}

async function fallbackSum(a, b) {
    let sum;
    try {
        sum = doSum(a, b);
    } catch (error) {
        console.log(error);
        sum = await askFromOthers(a, b);
    }
    return typeof sum == 'object' ? sum.data : sum;
}

async function askFromOthers(a, b) {
    let answer
    try {
        answer = await sendNumbers(`http://api.mathjs.org/v4/?expr=${a}*(${b})`);
    } catch (error) {
        return error;
    }
    return answer?.data;
}

module.exports = {
    askFromOthers: askFromOthers,
    doSum: doSum,
    fallbackSum: fallbackSum
}