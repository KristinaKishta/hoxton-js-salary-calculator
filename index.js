//Salary 1
const grossSalary_1 = 500
let pensionContribution_1 = grossSalary_1 * (5 / 100)
let taxedSalary_1 = grossSalary_1 - pensionContribution_1
let taxUnder80 = (80 - 0) * (0/ 100)
let taxUnder250 = (250-80) * (4 / 100)
let taxUnder450 = (450-250) * (8 / 100)
let taxOver450 = (taxedSalary_1 - 450) * (10 / 100)

let totalTax = taxUnder80 + taxUnder250 + taxUnder450 + taxOver450
console.log(totalTax)
let takeHomePay_1 = taxedSalary_1 - totalTax
console.log("The total take home pay is: " + takeHomePay_1)

//Salary 2
const grossSalary_2 = 200
let pensionContribution_2 = grossSalary_2 * (5 / 100);
let taxedSalary_2 = grossSalary_2 - pensionContribution_2
let takeHomePay_2 = taxedSalary_2 - totalTax
console.log("The total take home pay is:" + takeHomePay_2)