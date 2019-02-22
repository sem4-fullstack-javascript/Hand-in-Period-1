// b
var a = 'Hej';
var b = 'med';
var c = 'dig';
var myFunc1;
myFunc1 = function (a, b, c) { return [a, b, c]; };
console.log(myFunc1(a, b, c));
// c
var myFunc2;
myFunc2 = function (a, b, c) { return [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()]; };
console.log(myFunc2(a, b, c));
// d
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["a", "b", "c"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
// e
f2(myFunc1);
f2(myFunc2);
// f
//f2(()=>true)
//# sourceMappingURL=interfaces2.js.map