const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Enter number: ", (input) => {
    let number = parseFloat(input);
    for(i=1;i<=10;i++){
        const result = number*i;

        console.log(result);
    };

    

    readline.close();
  });