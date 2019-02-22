// a
function printType(arg) {
    return typeof arg;
}
console.log(printType('Hello'));
// b
function printTypes(arg1, arg2, arg3) {
    return [typeof arg1, typeof arg2, typeof arg3];
}
console.log(printTypes(1, "a", new Date()));
// c
function reverseArr(arr) {
    return arr.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
//console.log(reverseArr<number>(["a","b","c"]));
// d
var DataHolder = /** @class */ (function () {
    function DataHolder(val) {
        this.val = val;
    }
    DataHolder.prototype.getValue = function () {
        return this.val;
    };
    DataHolder.prototype.setValue = function (val) {
        this.val = val;
    };
    return DataHolder;
}());
var d = new DataHolder("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());
var d2 = new DataHolder(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());
//# sourceMappingURL=Generics.js.map