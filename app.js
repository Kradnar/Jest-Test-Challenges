//? To make sure what is returned is not ‘null’

const add = (num1, num2) => {
    return num1 + num2
}

//? A value that is truthy
let trueValue = true

//? A value that is not falsy
let falseValue = false

//? Create a function that creates an object with 2 properties, test to
//? makes sure that the objects properties are equal to your test
//? function
const myFunc = ()=> {
    const  person = {
        name: "Bob",
        age: 32,
    }
    return person
}

//? A function that will return items in an array with 6 or more
//? characters
const sixGreater = ()=> {
    let nameList = ['Dan', 'Stuart', 'Ben', 'Sebastian', 'Michael', 'Gareth', 'Maximilian']
    let printStringArray = ()=> {
        return nameList.filter((str) => str.length >= 6);
    }
    return printStringArray()
}
console.log(sixGreater())

//? Can you refractor any of your code? (Line 7 on test file)

//*-----------------------------------

//?Convert a number to a string
const num2Str = (num)=> {
    let newStr = num.toString();
    return newStr;
}
num2Str(22)

//? Display the correct planet with the number order it is away from
//? the sun (planet(3) will return ‘Earth’)
const planetFunc = (planNum)=> {
const planetList = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
]
let planNum2 = (planNum - 1)
let planet = (planetList[planNum2])
return planet
// console.log(planet)

}
planetFunc(3)


//? Count the amount of students present in the class. With an array
//? or boolean values, count how many students are present (true =
//? present)
//?    ([true, true, true, false, true] //will return 5)

const studFunc = ()=> {
    let studentsHere = {
        Andrew: true,
        Ben: true,
        Chris: false,
        Dan: true,
        Eddy: false,
        Francis: true,
        Gerry: false,
    }
    const count = Object.values(studentsHere).filter(item => item === true).length;
    return count
    // console.log(count);
}
studFunc()

//TODO Square every digit and concatenate them (must return an integer)
//TODO    (squareDigi(34) //will return 916)

module.exports = { add, trueValue, falseValue, myFunc, sixGreater, num2Str, planetFunc, studFunc }