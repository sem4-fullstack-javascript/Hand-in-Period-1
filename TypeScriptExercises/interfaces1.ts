// a
interface IBook{
    title:string
    author:string
    published:Date
    pages:number
}

// b
function test(book:IBook){
    console.log(JSON.stringify(book))
}

test({title:"Awesome Book", author:"Nikolaj",published:new Date(), pages:1000})

// c
// If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck

// d
interface IBookPartial{
    title:string
    author:string
    published?:Date
    pages?:number
}

function test2(book:IBookPartial){
    book.author = "bob"
    console.log(JSON.stringify(book))
}

test2({title:"Awesome Book", author:"Nikolaj"})

//e
interface IBookReadonly{
    title:string
    readonly author:string
    published:Date
    pages:number
}

function test3(book:IBookReadonly){
//    book.author = "bob"
    console.log(JSON.stringify(book))
}

test3({title:"Awesome Book", author:"Nikolaj",published:new Date(), pages:1000})

class Book implements IBook{
    constructor(public title:string, public author:string, public published:Date, public pages:number){

    }
}