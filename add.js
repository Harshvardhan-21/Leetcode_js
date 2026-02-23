const readline = require ("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter First Number : ", (num1Input) => {
    rl.question("Enter Second Number ; ",(num2Input) =>{
        const num1 = parseFloat(num1Input);
        const num2 = parseFloat(num2Input);
        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 + num2;
            console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
          } else {
            console.log('Invalid input. Please enter valid numbers.');
          }
          rl.close();

    });

});
