console.log('Hello World!') 
let a=5
console.log(a++)
console.log(a)
console.log()


// let n=prompt('your score is:')
// if(n>=90 && n<=100){
//     alert('A Grade') 
// }else if(n>=70 && n<90){
//     alert('B Grade')
// }else if(n>=60 && n<70){
//     alert('C Grade')
// }else if(n>=50 && n<60){
//     alert('D Grade')
// }
// else{
//     alert('F Grade')
// }


//for loop
// for(let i=1;i<=5;++i){
//     console.log("weed")
// }
// console.log()
// let m=prompt('Enter a number to get sum from 1 to n:')
// let sum=0
// for(let i=1;i<=m;++i){
//     sum=sum+i
// }
// console.log(sum)

// infinite loop
// for(let i=1;i>0;i++){
//     console.log("weed")
// }

//while loop
let i=1
while(i<=5){
    console.log('weed')
    i++
}
console.log()

// do while loop
let j=1
do{
    console.log('weed')
    j++}while(j<=5)

//for of loop
let arr=[1,2,3,4,5]
let n='weed'
for(let i of arr){
    if(i%2==0){
        console.log(i)
    }
}
console.log()
console.log(n.length)
let l=0
for(let i of n){
    l=l+1
    console.log(i)
}
console.log(l)
console.log()

//for in loop
let student={
    name:'weed',
    age:420,
    isPass:true
}
for(let i in student){
    console.log(i,student.i)
}

console.log()
// loop questions practice
//print odd, even no. from 0-100
let sum=0
for(let i=0;i<=100;i++){
    if(i%2===0){
        console.log(i)
        sum=sum+i
    }
}
for(let i=1;i<=100;i+=2){
        console.log(i)
}
// guess the game number 
let gameNumber='69' 
// if gameNumber =69 then use == and != as prompt converts the value to string
let guess=prompt('Enter ur guess number between 1-100:')
if(gameNumber===guess){
    alert('Congratulations! You have guessed the number')}
    else{
        alert('Try again!!!!!')}
// use while loop kyuki datatype ki dikat nhi aega
while(gameNumber!==guess){
    guess=prompt('Enter ur guess number between 1-100:')
}
alert('Congratulations! You have guessed the number')
    



