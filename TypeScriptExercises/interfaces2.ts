// a
type myFunc = (a:string, b:string, c:string) => string[]

// b
let a:string = 'Hej'
let b:string = 'med'
let c:string = 'dig'

let myFunc1:myFunc
myFunc1 = (a:string,b:string,c:string) => [a,b,c]

console.log(myFunc1(a,b,c))

// c
let myFunc2:myFunc
myFunc2 = (a:string,b:string,c:string) => [a.toUpperCase(),b.toUpperCase(),c.toUpperCase()]

console.log(myFunc2(a,b,c))

// d
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["a", "b", "c"];
    console.log(f1(a,b,c));
}

// e
f2(myFunc1)
f2(myFunc2)

// f
//f2(()=>true)