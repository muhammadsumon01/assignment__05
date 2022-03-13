/**
 * CGPA, GPA, Grade Calculation
 */



function ResultCalc() {


        // Data from user

        // this.studentName = prompt(`What's your name?`);
        // this.studentRoll = prompt(`What's your roll?`);

        // this.bangla = prompt(`What's your total mark in bangla?`);
        // this.english = prompt(`What's your total mark in english?`);
        // this.math = prompt(`What's your total mark in math?`);
        // this.science = prompt(`What's your total mark in science?`);
        // this.religion = prompt(`What's your total mark in religion?`);



        this.studentName = 'Muhammad Sumon';
        this.studentRoll = 1;

        this.bangla = 55;
        this.english = 53;
        this.math = 34;
        this.science = 99;
        this.religion = 93;

        this.totalNumber = this.bangla + this.english + this.math + this.science + this.religion;

        this.gpaCalc = number => {

                if (number >= 0 && number <= 32) {
                        return 0;
                } else if (number >= 33 && number <= 39) {
                        return 1;
                } else if (number >= 40 && number <= 49) {
                        return 2;
                } else if (number >= 50 && number <= 59) {
                        return 3;
                } else if (number >= 60 && number <= 69) {
                        return 3.5;
                } else if (number >= 70 && number <= 79) {
                        return 4;
                } else if (number >= 80 && number <= 100) {
                        return 5;
                } else {
                        return 'Enter Correct Number Between 0 - 100'
                }

        }

        this.gradeCalc = number => {

                if (number >= 0 && number <= 32) {
                        return 'F';
                } else if (number >= 33 && number <= 39) {
                        return 'D';
                } else if (number >= 40 && number <= 49) {
                        return 'C';
                } else if (number >= 50 && number <= 59) {
                        return 'B';
                } else if (number >= 60 && number <= 69) {
                        return 'A-';
                } else if (number >= 70 && number <= 79) {
                        return 'A';
                } else if (number >= 80 && number <= 100) {
                        return 'A+';
                } else {
                        return 'Enter Correct Number Between 0 - 100'
                }

        }




        this.passFailCheck = () => {

                let cgpa = ((this.gpaCalc(this.bangla)) + (this.gpaCalc(this.english)) + (this.gpaCalc(this.math)) + (this.gpaCalc(this.science)) + (this.gpaCalc(this.religion))) / 5;


                if ((this.gpaCalc(this.bangla)) == 0 || this.gpaCalc(this.english) == 0 || this.gpaCalc(this.math) == 0 || this.gpaCalc(this.science) == 0 || this.gpaCalc(this.religion) == 0) {
                        return `Failed`;
                } else {
                        return cgpa;
                }

        }

}

let resultCheck = new ResultCalc();

console.log(`

        Hi ${resultCheck.studentName}! Your Roll Number ${resultCheck.studentRoll}. Your Result Processing Done. Check below !

        -------------------------------------------------------
        Subject Name    | Subject Number | GPA        | GRADE
        -------------------------------------------------------
        Bangla          | ${resultCheck.bangla}             | ${resultCheck.gpaCalc(resultCheck.bangla)}          | ${resultCheck.gradeCalc(resultCheck.bangla)}
        English         | ${resultCheck.english}             | ${resultCheck.gpaCalc(resultCheck.english)}          | ${resultCheck.gradeCalc(resultCheck.english)}
        Math            | ${resultCheck.math}             | ${resultCheck.gpaCalc(resultCheck.math)}          | ${resultCheck.gradeCalc(resultCheck.math)}
        Science         | ${resultCheck.science}             | ${resultCheck.gpaCalc(resultCheck.science)}          | ${resultCheck.gradeCalc(resultCheck.science)}
        Religion        | ${resultCheck.religion}             | ${resultCheck.gpaCalc(resultCheck.religion)}          | ${resultCheck.gradeCalc(resultCheck.religion)}
        -------------------------------------------------------
                  Total - ${resultCheck.totalNumber}       CGPA - ${resultCheck.passFailCheck()} 
`);