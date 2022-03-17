// Task 1
const a1 = [1, 2, 3];
const a2 = a1;

a1[0] = 99;

// console.log(a2[0]);

// Answer: 99

// Task 2
const entries_2 = ['a', 'b', 'c'];

// console.log(Array.isArray(entries_2));

// Answer: true

// Task 3
const entries_3 = ['a', 'b', 'c'];

entries_3.length = 10;

// console.log(entries_3.length);

// Answer: 10

// Task 4
const entries_4 = ['a', 'b', 'c'];

// console.log(entries_4.toString());

// Answer: 'a,b,c'

// Task 5
const entries_5 = [];

// console.log(entries_5.pop());

// Answer: undefined

// Task 6
const entries_6 = ['a', 'b', 'c', 'd'];
const newEntries = entries_6.slice(2);

// console.log(newEntries);

// Answer: ['c', 'd'];

// Task 7
const entries_7 = ['a', 'b', 'c', 'd'];
const r = entries_7.splice(2, 1, 'A', 'B', 'C');

// console.log(entries_7.toString());
// console.log(r);

// Answer:  1- 'a,b,A,B,C,d'
//          2- ['c']

// Task 8
const ratings_8 = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// console.log(ratings_8.indexOf(66));

// Answer: -1

// Task 9
const entries_9 = ['a', 'b', 'c', 'd'];

entries_9.forEach(
	function(element, index, array) {
		if (index === 1) array.push('e');

		// console.log(element.toUpperCase());
	});

// Answer:  1- 'A'
//          2- 'B'
//          3- 'C'
//          4- 'D'

// Task 10
const ratings_10 = [1, 2, 3, 4, 5];
const result_10 = ratings_10.reduce((start, next, index, array) => start * next);

// console.log(result_10);

// Answer: 120

// Task 11
const priority_11 = [1, 2, 3];
const priorityCopy_11 = Array.from(priority_11);

// console.log(priority_11 === priorityCopy_11);

// Answer: false

// Task 12
const priority_12 = [1, 2, 3];
const result_12 = priority_12.find(elem => elem >= 2);

// console.log(result_12);

// Answer: 2

// Task 13
const priority_13 = [1, 2, 3];
const result_13 = priority_13.includes(2);

// console.log(result_13);

// Answer: true

// Task 14
const nums_14 = [ 1, 2, [ 3, 4 ], [ [ 5, 6 ] ] ];

// console.log(nums_14.flat(Infinity));

// Answer: [1, 2, 3, 4, 5, 6]

// Task 15
const priorityCodes_15 = ["A", ..."BC", "D"];

// console.log(priorityCodes_15);

// Answer: ["A", "B", "C", "D"];

// Task 16
const priority_16 = ['Low', 'Normal', 'High'];
const [low, ...remaining] = priority_16;

// console.log(remaining);

// Answer: ['Normal', 'High']

// Task 17
const priority_17 = new Set();

priority_17.add("High");
priority_17.add("Low");

// console.log(priority_17.size);

// Answer: 2

// Task 18
const priority_18 = new Set(["High","Low"]);

function logSetElements(key, value, set) {
	console.log(`s[${key}] = ${value}`);
}

// priority_18.forEach(logSetElements);

// Answer:  1- 's[High] = "High"'
//          2- 's[Low] = "Low"'

// Task 19
const task1_19 = { action: "Create..." };
const task2_19 = { action: "Delete..." };
const project_19 = new WeakSet([task1_19, task2_19]);

// console.log(project_19.has(task1_19));

// Answer: true

// Task 20
const task1_20 = { action: "Create..." };
const task2_20 = { action: "Delete..." };
const project_20 = new WeakSet([task1_20, task2_20]);

// for (let p of project_20) {
// 	console.log(p.action);
// }

// Answer: TypeError: project is not iterable