// a
function printType<T>(arg:T){
    return typeof arg
}

console.log(printType('Hello'))

// b
function printTypes<T,U,V>(arg1:T,arg2:U,arg3:V):Array<any>{
    return [typeof arg1,typeof arg2,typeof arg3]
}

console.log(printTypes<number,string,Date>(1,"a",new Date()))

// c
function reverseArr<T>(arr:Array<T>){
    return arr.reverse()
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"]));

// d
class DataHolder<T>{
    constructor(private val:T){}
    getValue(){
        return this.val
    }
    setValue(val:T){
        this.val = val
    }
}

let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());

// e
interface Owner {
    owner: String;
}

function printOwner<T extends Owner>(arg:T) {
    return arg.owner
}

console.log(printOwner({owner:''}))
//console.log(printOwner({bobcat:'danger'}))