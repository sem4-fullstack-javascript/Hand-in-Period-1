import _ from "lodash";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

const table = makeTable(persons);
document.getElementById("my-table").innerHTML = table;

class Person {
	constructor(fn, ln, s) {
		this.firstName = fn;
		this.lastName = ln;
		this.favoriteSport = s;
	}
}

const persons = [
	new Person("Kurt", "Wonnegut", "Socker"),
	new Person("Jan", "Peterson", "Hockey"),
	new Person("Jane", "Peterson", "Skating"),
	new Person("John", "Hansen", "Socker")
];

function makeTable(data) {
	// Make the header for the table
	// Make the body for the table
	// Make the table with the header and body. Provide the table element with class="table"
	// to style with Bootstrap
}
