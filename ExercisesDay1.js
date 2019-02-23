var names = ["Lars", "Peter", "Jan", "Bo"];
console.log(names.filter(n => n.includes('a')));
console.log(names.map(n => n.split("").reverse().join("")));

function myFilterBad(array, callback) {
	let arr = [];
	for (x in array) {
		if (callback(array[x])) {
			arr.push(array[x]);
		}
	}
	return arr;
}
console.log(myFilterBad(names, (n => n.includes('a'))));

function myMapBad(array, callback) {
	let arr = [];
	for (x in array) {
		arr.push(callback(array[x]));
	}
	return arr;
}
console.log(myMapBad(names, (n => n.split("").reverse().join(""))));

Array.prototype.myFilter = function (callback) {
	let arr = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			arr.push(this[i]);
		}
	}
	return arr;
};

Array.prototype.myMap = function (callback) {
	let arr = [];
	for (let i = 0; i < this.length; i++) {
		arr.push(callback(this[i]));
	}
	return arr;
};

console.log(names.myFilter(n => n.includes('a')));
console.log(names.myMap(n => n.split("").reverse().join("")));

var numbers = [1, 3, 5, 10, 11];
console.log(numbers.map((cur, i, arr) => i + 1 < arr.length ? cur + arr[i + 1] : cur));

console.log("<nav>" + names.map(n => "<a href=\"\">" + n + "</a>").join("") + "</nav>");

names = [{
		name: "Lars",
		phone: "1234567"
	},
	{
		name: "Peter",
		phone: "675843"
	},
	{
		name: "Jan",
		phone: "98547"
	},
	{
		name: "Bo",
		phone: "79345"
	}
];

console.log("<table>" + names.map(e => "<tr><td>" + e.name + "</td><td>" + e.phone + "</td></tr>").join("") + "</table>");

var all = ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(","));
console.log(all.join(" "));
console.log(all.join("#"));

numbers = [2, 3, 67, 33];
console.log(numbers.reduce((sum, cur) => sum + cur));

var members = [{
		name: "Peter",
		age: 18
	},
	{
		name: "Jan",
		age: 35
	},
	{
		name: "Janne",
		age: 25
	},
	{
		name: "Martin",
		age: 22
	}
]
console.log(members.reduce(((acc, cur, i, arr) => acc + cur.age / arr.length), 0));

var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
console.log(votes.reduce(((acc, cur) => {
	acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
	return acc;
}), {}));

var add = (function () {
	var counter = 0;
	return function () {
		counter += 1;
		return counter
	}
})();
console.log(add());
console.log(add());
console.log(add());

var person = function () {
	var name;
	var age;

	function setAge(a) {
		age = a;
	}

	function setName(n) {
		name = n;
	}
	return {
		setAge: function (age) {
			setAge(age);
		},
		setName: function (name) {
			setName(name);
		},
		getInfo: function () {
			return name + ", " + age;
		}
	}
};

var person1 = person();
var person2 = person();

person1.setAge(22);
person1.setName("Nikolaj");
person2.setAge(19);
person2.setName("Jonas");
console.log(person1.getInfo());
console.log(person2.getInfo());