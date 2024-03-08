function test(){
    // var a = '3';
    // var b = '8';

    // var temp = a;
    // a = b;
    // b = temp;

    // console.log('a is : ' + a)
    // console.log('b is : ' + b)

    let massMark = 78;
    let heightMark = 1.69;
    let massJohn = 92;
    let heightJohn = 1.95;

    let markBmi = massMark / (heightMark * heightMark)
    let johnBmi = massJohn / (heightJohn * heightJohn)

    console.log(`Mark's BMI is: `+ markBmi.toFixed(2))
    console.log(`John's BMI is: ` + johnBmi.toFixed(2))

    let markHigherBMI = markBmi > johnBmi
    console.log(markHigherBMI)

}

test()