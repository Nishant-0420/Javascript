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



// functions 
function summ(a,b){
    console.log('sum is:')
    return a+b;
}
summ(5,6)   
console.log(summ(5,6))

// arrow function
const summ2=(a,b)=>{
    return a+b;
}
console.log(summ2(69,69))
console.log()

//create function with function keyword that tkes a string and returns no. of vowels in it
let c1=0
function vowel(a){
    for(let i of a){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'||i=='A'||i=='E'||i=='I'||i=='O'||i=='U'){
            c1=c1+1
        }     
    }
    return c1
}
console.log(vowel('weed'))
// do the same with arrow function
c1=0
const arrowVowel=(a)=>{
    for(let i of a){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'||i=='A'||i=='E'||i=='I'||i=='O'||i=='U'){
            c1=c1+1
        }     
    }
    return c1
}
 console.log(arrowVowel('wEEeed'))
console.log()
// print square of each element of array using forEach
 let arr6=[1,2,3,4,5,6,7,8,9,10]
 arr6.forEach((a)=>{
    a**2
 })
 console.log(arr6)  //see original string is not changed and also new string is not created

//  important array methods
//map
let arr7=[1,2,3,4,5,6,7,8,9,10]
let maparr=arr7.map((a)=>{
    return a**2
})

//filter
console.log(maparr)
let filterarr=arr7.filter((a)=>{
    if(a%2==0){ return a}
})
console.log(filterarr)


//practice question using array methods

// filter out 90+ marks from array
let marks=[12,45,65,98,100,45,78,98,100]
let nintyplus=marks.filter((a)=>{
    return a>90
})
console.log("90+ marks")
console.log(nintyplus)

n=9
let arr8=[]
for(let i=1;i<=n;i++){
    arr8.push(i)
}
console.log("arr from 1 to n")
console.log(arr8)
// console.log(arr8[4]);
//  calculating sum of array using reduce
let sum8=arr8.reduce((pre,curr)=>{
    return pre+curr
})
console.log("sum of array")
console.log(sum8)

//finding factorial in array using reduce
let f=arr8.reduce((pre,cur)=>{
    return pre*cur
})
console.log("factorial of array8")
console.log(f)

let str1='weed'
let str2=""
for (let i of str1){
    if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
        str2=str2+i
    }
}
console.log("vowels in string")
console.log(str2)
console.log(str1)

let arr9=[1,2,3,4,5,6,7,8,9,10]
let index=0
for(let i of arr9){
    if(i%2==0){
        arr9[index]=0
    }
    else{
        arr9[index]=1
    }
    index++
}
console.log("even=0 and odd=1")
console.log(arr9)
console.log(arr9.join(""))
let arrtostr=arr9.toString()
console.log(arrtostr)

let h2= document.querySelector("h2")
console.log(h2.innerText)
h2.innerText=h2.innerText+" from apna college student"
console.log(h2.innerText)

let divs=document.querySelectorAll(".box")
console.log(divs)
divs[0]=divs[0].innerText="weed"
divs[1].innerText="hash"

