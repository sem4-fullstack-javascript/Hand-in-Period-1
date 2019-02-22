var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// A
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Object.defineProperty(Shape.prototype, "area", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "perimeter", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Shape;
}());
var shape = new Shape('blue');
console.log(shape.getColor());
//console.log(shape.getArea())
//console.log(shape.getPerimeter())
shape.setColor('red');
console.log(shape.toString());
// B
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return 3.1415 * this.radius * this.radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "perimeter", {
        get: function () {
            return 2 * 3.1415 * this.radius;
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Circle;
}(Shape));
var circle = new Circle('blue', 1);
console.log(circle.getRadius());
//console.log(circle.getArea())
//console.log(circle.getPerimeter())
circle.setRadius(10);
console.log(circle.toString());
// C
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(color, radius, height) {
        var _this = _super.call(this, color, radius) || this;
        _this.color = color;
        _this.radius = radius;
        _this.height = height;
        return _this;
    }
    Cylinder.prototype.getHeight = function () {
        return this.height;
    };
    Cylinder.prototype.setHeight = function (height) {
        this.height = height;
    };
    Object.defineProperty(Cylinder.prototype, "area", {
        get: function () {
            return 3.1415 * this.radius * this.radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "perimeter", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "volume", {
        get: function () {
            return this.area * this.getHeight();
        },
        enumerable: true,
        configurable: true
    });
    Cylinder.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Cylinder;
}(Circle));
var cylinder = new Cylinder('blue', 1, 1);
console.log(cylinder.getHeight());
// console.log(cylinder.getArea())
// console.log(cylinder.getPerimeter())
// console.log(cylinder.getVolume())
cylinder.setHeight(10);
console.log(cylinder.toString());
// D
console.log(shape.area);
console.log(shape.perimeter);
console.log(circle.area);
console.log(circle.perimeter);
console.log(cylinder.area);
console.log(cylinder.perimeter);
console.log(cylinder.volume);
//# sourceMappingURL=classesAndInheritance.js.map