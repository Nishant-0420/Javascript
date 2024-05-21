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

// let guess=prompt('Enter ur guess number between 1-100:')
// if(gameNumber===guess){
//     alert('Congratulations! You have guessed the number')}
//     else{
//         alert('Try again!!!!!')}
// // use while loop kyuki datatype ki dikat nhi aega
// while(gameNumber!==guess){
//     guess=prompt('Enter ur guess number between 1-100:')
// }
// alert('Congratulations! You have guessed the number')

// string questions 
// prompt user full name and generate username with star @ and then full name and last with fullname length

// let fullName=prompt('Enter your full name:')
// let userName=(`@${fullName}${fullName.length}`)
// console.log(userName)
// let naam='@'+fullName.replace(/\s+/g, '')+fullName.length
// alert(naam)

// more string questions
let is_string = function(input) {
    if (typeof(input) == "string" ){
        console.log('true')
    }
      
    else{ 
        return false}
       
  }
console.log(is_string(69))
console.log()

// array
let arr1=[12,45,65,34]
for(let b of arr1){
    console.log(b)
}
for(let i =0;i<arr1.length;i++){
    console.log(arr1[i])
}
let sum1=0
let arr2=[85,97,44,37,76,60]
for(let b of arr2){
    sum1=sum1+b
}
console.log()
console.log('average = '+sum1/arr2.length)

let arr3=[250,645,300,900,50]
// let arr4=[]
// for(let b of arr3){
//     arr4.push(b-(b*0.1))
// }
// console.log(arr4)
for(let i=0;i<arr3.length;i++){
    arr3[i]=arr3[i]-arr3[i]*0.1
}
console.log(arr3)

let arr5=[1,2,3,4,5,6,7,8,9,10]
arr5.splice(3,2,40,50)
console.log(arr5)
arr5.splice(3,0,4,5)
console.log(arr5)
console.log()

let companies=['bloomberg','microsoft','uber','google','ibm','netflix']
companies.shift()
console.log(companies)
companies.splice(2,1,'ola')
console.log(companies)
companies.push('amazon')
console.log(companies)

    



