"use strict";

// console.log("Learning about DOM loops")

// const ageCheck = (age) => {
//     if (age < 21) {
//         console.log("No drinks for you")
//     } else {
//         console.log("PARTAY!!!!")
//     }
// }

// ageCheck(21);

// const lengthOutput = (strang) => {
//     return strang.length
// }

// console.log(lengthOutput([1,2,3,4,5,6,7]));

// const quoteFinder = (testString) => {
//     return "winter is coming".indexOf(testString)
// }

// console.log(quoteFinder("is"));

const employee = {
    firstName: "Rob",
    lastName: "Bandstra",
    role: "student",
    accountNumber: "894533218",
    isManager: false,
    titles: ["Junior Developer", "Hey You", "Bobert"],
    accolade: {
        title: "Employee of the Year",
        dateEarned: "1/2/2020",
        expires: "12/21/2020",
        isCool: true
    }
}

// console.log(employee.firstName);
// const keyToCheck = "accolade";

// console.log(employee[keyToCheck]["isCool"])

const employeeStatus = (employee) => {
    if (employee.firstName[0] === "R") {
        employee.status = "vip"
    } else {
        employee.status = "peasant"
    }
}

employeeStatus(employee);

console.log(employee);