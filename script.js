//Task1

// let num = Number(prompt("Ededi daxil edin:"));
// if(num%3===0){
//     console.log("eded 3e bolunur");
// }
// else{
//     console.log("eded 3e bolunmur")
// }
// if(num%7===0){
//     console.log("eded 7ye bolunur");
// }
// else{
//     console.log("eded 7ye bolunmur")
// }

//Task2

// let n = Number(prompt("Ededi daxil edin:"));
// let m = Number(prompt("Ededi daxil edin:"));
// let count=0;
// if(n<m){
//     for (let i = n; i < m; i++) {
//         if(i%2===1){
//             count+=1;
//         }

//     }
//     console.log(count);
// }
// else{
//     console.log("Ededleri duzgun daxil edin!");
// }


//Task3

// let n = Number(prompt("Ededi daxil edin:"));
// let m = Number(prompt("Ededi daxil edin:"));
// let sum = 0;
// if (n < m) {
//     for (let i = n; i < m; i++) {
//         if (i % 2 === 1) {
//             sum += i;
//         }

//     }
//     console.log(sum);
// }
// else {
//     console.log("Ededleri duzgun daxil edin!");
// }

//Task4

// let n = Number(prompt("Eded daxil edin"));
// let count = 0;
// if (n === 1) {
//     console.log("Eded ne sadedir ne de murekkeb");
// }
// else {
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             count += 1;
//         }
//     }
//     if (count > 2) {
//         console.log("Murekkeb ededdir");
//     }
//     else {
//         console.log("Sade ededdir");
//     }
// }


//Task5

// let arr=[4,9,2,5,7];
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element%2===0){
//         sum+=element;
//     }
// }
// console.log(sum);

//Task6

// function SumOfEvenSquares(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element % 2 === 0) {
//             sum += element ** 2;
//         }
//     }
//     return sum;
// }
// let arr = [12, 7, 25, 4, 19, 30, 8, 15, 2, 21];
// console.log(SumOfEvenSquares(arr));

//Task7

// function SumBetween(num1,num2){
//     if(typeof num1==="number" && typeof num2==="number"){
//         let sum=0;
//         let min=0;
//         let max=0;
//         if(num1>num2)
//         {
//             min=num2;
//             max=num1;
//         }
//         else{
//             max=num2;
//             min=num1;
//         }
//         for (let i = min; i <= max; i++) {
//             sum+=i;
//         }
//         return sum;
//     }
//     else{
//         return "Her iki parametr reqem olmalidir";
//     }
// }
// let num1=10;
// let num2=15;
// console.log(SumBetween(num1,num2));
