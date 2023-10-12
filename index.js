import inquirer from "inquirer";
let play;
async function currencyConverter() {
    do {
        let number = await inquirer.prompt({
            name: 'input',
            type: 'number',
            message: 'Please enter Rs which do you wants to convert.'
        });
        console.log(number.input);
        let user = await inquirer.prompt({
            name: 'input',
            type: 'list',
            message: 'Select The Currency which do you wants to convert.',
            choices: ['USD', 'Riyal', 'Pound', 'Dinar']
        });
        console.log(user.input);
        if (user.input == 'USD') {
            console.log(`Your amount in $ `, number.input / 278);
        }
        else if (user.input == 'Riyal') {
            console.log(`Your amount in Riyal `, number.input / 75);
        }
        else if (user.input == 'Pound') {
            console.log(`Your amount in Pound `, number.input / 343);
        }
        else if (user.input == 'Dinar') {
            console.log(`Your amount in Dinar `, number.input / 901);
        }
        ;
        const next = await inquirer.prompt({
            name: 'more',
            type: 'list',
            message: 'Do You Wants to Calculate More Calculation',
            choices: ['More', 'Exit']
        });
        if (next.more == 'More') {
            play = true;
        }
        else if (next.more == 'Exit') {
            play = false;
        }
    } while (play);
}
;
currencyConverter();
