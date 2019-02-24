import _ from "lodash";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

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

const table = makeTable(persons);
document.getElementById("my-table").innerHTML = table;

function makeTable(data) {
	// Make the header for the table
	let keys = _.keys(data[0]);
	const tableHeaders = keys.map(d => `<td>${_.startCase(d)}</td>`);
	// Make the body for the table
	let values = data.map(d => {
		let str = "";
		for (let p in d) {
			str += `<td>${d[p]}</td>`;
		}
		return `<tr>${str}</tr>`;
	});
	// Make the table with the header and body. Provide the table element with class="table"
	// to style with Bootstrap
}
