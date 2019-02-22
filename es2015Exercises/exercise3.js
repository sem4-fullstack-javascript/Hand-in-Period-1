// A without arrow function
function Numbers(numbs) {
    let self = this
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            self.fives.push(v);
        }
    });
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);

// A with arrow function

function NumbersFix(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach((v) => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    });
}
var numbers = new NumbersFix([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);

// B

var counter = {
    count: 0,
    inc: () => {
        this.count++;
    }
}
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

// Arrow functions makes it worse