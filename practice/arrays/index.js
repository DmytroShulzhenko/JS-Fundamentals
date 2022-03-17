// Task 1
const VALID_STATES = new Set(['SUCCESS', 'FINAL', 'DONE']);

const people = [
	{name: 'Max', age: 20, status: 'IN_PROGRESS'},
	{name: 'Sam', age: 21, status: 'DONE'},
	{name: 'Dan', age: 30, status: 'SUCCESS'}
];

const peopleWithValidationState = people.filter(person => VALID_STATES.has(person.status)).map(person => person.name);

console.log(peopleWithValidationState);

// Task 2
const meetups = [
	{name: 'JavaScript', isActive: true , members: 100 },
	{name: 'Angular', isActive: true , members: 900 },
	{name: 'Node', isActive: false , members: 600 },
	{name: 'React', isActive: true , members: 500 },
];

const membersOnActiveMeetups = meetups => meetups.filter(meetup => meetup.isActive).reduce((sum, meetup) => sum + meetup.members, 0);

console.log(membersOnActiveMeetups(meetups));