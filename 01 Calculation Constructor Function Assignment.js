/**
 * Calculation Constructor Function Assignment
 */


function MuhammadSumon() {

        // 01 | Child, Teenager, Young & Old People Indentify from age

        this.personIndentify = (name, age) => {

                if (age >= 0 && age < 12) {
                        return `Hello ${name}! You are Baby`;
                } else if (age > 11 && age < 18) {
                        return `Hello ${name}! You are khoka Babu`;
                } else if (age > 17 && age < 40) {
                        return `Hello ${name}! You are Young`;
                } else if (age > 39) {
                        return `Hello ${name}! You are Old`;
                } else {
                        return `Please Enter a Sothik Number :(`
                }
        }


        // 02 | Area Calculation of rectangular, triangle & square

        this.areaCalc = (type, width, height) => {

                if (type == 'r') {

                        return (`area of rectangle is ${width * height}`)
                } else if (type == 's') {

                        return (`area of square is ${width * width}`)
                } else if (type == 't') {

                        return (`area of triangle is ${.5 * width * height}`)
                } else {
                        return `Enter Correct Value`;
                }

        }


        // 03 | Age Calculation

        this.ageCalc = (name, birth_year) => `Hello ${name}! You are ${2021 - birth_year} years old`;


        // 04 | Currency Converter

        this.currencyConvt = (currency, amount) => {
                if (currency == 'usd') {
                        return `Your total amount in usd is ${amount * 84}`
                } else if (currency == 'cad') {
                        return `Your total amount in cad is ${amount * 123}`
                } else if (currency == 'pound') {
                        return `Your total amount in pound is ${amount * 98}`
                } else if (currency == 'euro') {
                        return `Your total amount in euro is ${amount * 87}`
                } else {
                        `Please enter correct amount and currency name or maybe your currency is not supported to convert`
                }
        }

}

let muhammad = new MuhammadSumon();

console.log(muhammad.ageCalc('muhammad', 2003));