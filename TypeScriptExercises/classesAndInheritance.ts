// A
class Shape {
    constructor(protected color:string){
        
    }
    getColor(){
        return this.color
    }
    setColor(color:string){
        this.color = color
    }
    get area():number {
        return undefined;
    }
    get perimeter():number {
        return undefined;
    }
    toString(){
        return JSON.stringify(this)
    }
}

let shape = new Shape('blue')
console.log(shape.getColor())
//console.log(shape.getArea())
//console.log(shape.getPerimeter())
shape.setColor('red')
console.log(shape.toString())

// B
class Circle extends Shape{
    constructor(protected color:string, protected radius:number){
        super(color)
    }
    getRadius(){
        return this.radius
    }
    setRadius(radius:number){
        this.radius = radius
    }
    get area():number {
        return 3.1415 * this.radius * this.radius
    }
    get perimeter():number {
        return 2 * 3.1415 * this.radius
    }
    toString(){
        return JSON.stringify(this)
    }
}

let circle = new Circle('blue', 1)
console.log(circle.getRadius())
//console.log(circle.getArea())
//console.log(circle.getPerimeter())
circle.setRadius(10)
console.log(circle.toString())

// C
class Cylinder extends Circle{
    constructor(protected color:string, protected radius:number, protected height:number){
        super(color, radius)
    }
    getHeight():number{
        return this.height
    }
    setHeight(height:number){
        this.height = height
    }
    get area():number {
        return 3.1415 * this.radius * this.radius
    }
    get perimeter():number {
        return undefined
    }
    get volume():number{
        return this.area * this.getHeight()
    }
    toString(){
        return JSON.stringify(this)
    }
}

let cylinder = new Cylinder('blue', 1, 1)
console.log(cylinder.getHeight())
// console.log(cylinder.getArea())
// console.log(cylinder.getPerimeter())
// console.log(cylinder.getVolume())
cylinder.setHeight(10)
console.log(cylinder.toString())

// D
console.log(shape.area)
console.log(shape.perimeter)
console.log(circle.area)
console.log(circle.perimeter)
console.log(cylinder.area)
console.log(cylinder.perimeter)
console.log(cylinder.volume)