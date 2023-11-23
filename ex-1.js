let accountBalance = 400;
let depositAmountFromUser = "10";
console.log(typeof depositAmountFromUser);
accountBalance = accountBalance + Number(depositAmountFromUser);

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage); // 410
