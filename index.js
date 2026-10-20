// let a = 10
// a = "Ram"

// console.log(a)

// console.log("Welcome to javascript")

// JSON
// const student1 = {
//     "name": "Pawan",
//     "age": 22
// }

// Object
// const student = {
//     name: "Pawan",
//     age: 22
// }

// student.name = "Kamal"
// console.log(student.name)
// console.log(student["age"])


// functional Scope

// {
//     var a = 20
//     console.log(a)
// }

// console.log(a)

// Blocked Scope (let, const)
// {
//     let a = 20
//     console.log(a)
// }

// console.log(a)

// let a = 546787245464646887n
// console.log(typeof a)

// let a;
// console.log(typeof a)

// let b = null
// console.log(typeof b)

// let num = 1000
// let strNum = String(num)

// console.log(typeof strNum)

// let number = Number(strNum)

// console.log(typeof number)


// console.log("10" + 20)
// console.log("10" - 20)
// console.log("Vaibhav" - 2)

// ++a, a++ => a = a+1
// let a = 10
// let b = ++a;
// let b = a++;
// console.log(a, b)

// let age = 20
// age >= 18 ? console.log("Eligible") : console.log("Not Eligible")

// let age = 15
// let hasLicense = true

// if(age >= 18){
//     if(hasLicense){
//         console.log("Can Drive")
//     }
//     else{
//         console.log("Can Not")
//     }
// }
// else{
//         console.log("Can Not")
// }

// let user = "Student"

// switch(user){
//     case "Student": console.log("I am a Student")
//     break;
//     case "Teacher": console.log("I am a Teacher")
//     break;
//     case "Admin": console.log("I am a Admin")
//     break;
//     default:
//         console.log("Invalid user")
// }

// for(let a = 1; a <= 10; a++){
//     console.log("Hello")
// }

// let secret = 65
// let attempt = 0
// let num;

// while(secret != num){
//     num = Math.floor((Math.random()*100)+1)
//     attempt++;
// }

// console.log(attempt)
// console.log(Math.floor((Math.random()*100)+1))


// let a = 1

// do{
//     console.log(a)
//     a++;
// }while(a != 2);


// for(let i=1;i<=10;i++){
//     if(i == 3)break
//     console.log(i)
// }
for(let i=1;i<=10;i++){
    if(i == 3)continue
    console.log(i)
}
