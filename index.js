console.log('Hello World!') 
let a=5
console.log(a++)
console.log(a)


let n=prompt('your score is:')
if(n>=90 && n<=100){
    alert('A Grade') 
}else if(n>=70 && n<90){
    alert('B Grade')
}else if(n>=60 && n<70){
    alert('C Grade')
}else if(n>=50 && n<60){
    alert('D Grade')
}
else{
    alert('F Grade')
}