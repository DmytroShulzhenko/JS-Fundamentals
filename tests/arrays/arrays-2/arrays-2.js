// Task 1
const entries_1 = ['a', 1, true];

// console.log(entries_1 instanceof Array);

// Answer: true

// Task 2
const entries_2 = ['a', 'b', 'c'];

// console.log(typeof entries_2);

// Answer: object

// Task 3
const entries_3 = [];

// console.log(entries_3.length);

// Answer: 0

// Task 4
const entries_4 = ['a', 'b', 'c'];

entries_4[entries_4.length] = 'd';

// console.log(entries_4.length);

// Answer: 4

// Task 5
const entries_5 = [];

entries_5.push('a');
entries_5.push('b', 'c');
entries_5.pop();

// console.log(entries_5.length);

// Answer: 2

// Task 6
const entries_6 = ['a', 'b', 'c'];
const newEntries_6 = entries_6.concat(['d', 'e', 'f'], 'g', 'h');

// console.log(newEntries_6.length);

// Answer: 8

// Task 7
const entries_7 = ['a', 'b', 'c', 'd'];
const r_7 = entries_7.splice(2, 0, 'A', 'B', 'C');

// console.log(entries_7.toString());
// console.log(r_7);

// Answer:  1- 'a,b,A,B,C,c,d'
//          2- []

// Task 8
const ratings_3 = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// console.log(ratings_3.indexOf('3'));

// Answer: -1

// Task 9
const entries_9 = ['a', 'b', 'c', 'd'];

entries_9.forEach(
	function(element, index) {
		if (index === 1) return;

		// console.log(element.toUpperCase());
	});

// Answer:  1- 'A'
//          2- 'C'
//          3- 'D'

// Task 10
const entries_10 = ['a', 'b', 'c', 'd', 'ef'];
const result_10 = entries_10.some(e => e.length === 2);

// console.log(result_10);

// Answer: true

// Task 11
const priority_10 = [1, 2, 3];
const priority100_10 = Array.from(
	priority_10,
	p => p*10 + this.adjustment,
	{ adjustment: 100 }
);

// console.log(priority100_10);

// Answer: [NaN, NaN, NaN]

// Task 12
const a_12 = Array(2).fill({ });

// console.log(a_12[0] === a_12[1]);

// Answer: true

// Task 13
const priority_13 = ["High", "Normal", "Low"];
for (let p of priority_13) {
	// console.log(p);
}

// Answer:  1- 'High'
//          2- 'Normal'
//          3- 'Low'

// Task 14
const nums_14 = [ 1, 2, [ 3, 4 ], [ [ 5, 6 ] ] ];

// console.log(nums_14.flat(0));

// Answer: [ 1, 2, [ 3, 4 ], [ [ 5, 6 ] ] ]

// Task 15
const estHours_15 = [8, 20, 16];
const newEstHours_15 = [...estHours_15, 40];

// console.log(newEstHours_15);

// Answer: [8, 20, 16, 40]

// Task 16
const priority_16 = ['Low', 'Normal', 'High'];
const [low, , high] = priority_16;

// console.log(high);

// Answer: 'High'

// Task 17
let count_17 = 0;

for (const [a, b] of [[5, 10]]) {
	// console.log(`${a} ${b}`);

	count_17++;
}

// console.log(count_17);

// Answer:  1- '5 10'
//          2- 1

// Task 18
const priority_18 = new Set(["High", "Low"]);

for (const value of priority_18) {
	// console.log(`s[${value}] = ${value}`);
}

// Answer:  1- 's[High] = High'
//          2- 's[Low] = Low'

// Task 19
const task1_19 = { action: "Create..." };
const task2_19 = { action: "Delete..." };

const project_19 = new WeakSet([task1_19, task2_19]);

// console.log(project_19.size);

// Answer: undefined

// Task 20
const task1_20 = { action: "Create..." };
const task2_20 = { action: "Delete..." };
const project_20 = new WeakSet([task1_20, task2_20]);

project_20.delete(task1_20);

// console.log(project_20.has(task1_20));

// Answer: false





