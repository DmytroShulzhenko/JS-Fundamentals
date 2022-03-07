console.log('Topic: Objects');

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Method should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// class
const Tune = (function () {
	// constructor
	function Tune(title, artist) {
		this.title = title;
		this.artist = artist;
	}

	// method
	Tune.prototype.concat = function () {
		return `${this.title} - ${this.artist}`;
	}

	return Tune;
})();

// Bad case:
// function Tune (title, artist) {
// 	this.title= title;
// 	this.artist= artist;
//
// 	Tune.prototype.concat = function () {
// 		return `${this.title} - ${this.artist}`
// 	}
// }

const obj_1_1 = new Tune('Title1', 'Artist1');
const obj_1_2 = new Tune('Title2', 'Artist2');

// console.log(obj_1_1.concat());
// console.log(obj_1_2.concat());

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Method should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

const Tune2 = (function () {
	const privet = new WeakMap();

	function Tune2(title, artist) {
		const privetMembers = {
			title,
			artist
		};

		privet.set(this, privetMembers);
	}

	Tune2.prototype.concat = function () {
		return `${privet.get(this).title} - ${privet.get(this).artist}`;
	}

	return Tune2;
})();

const obj_2_1 = new Tune2('Title1', 'Artist1');
const obj_2_2 = new Tune2('Title2', 'Artist2');

// console.log(obj_2_1);
// console.log(obj_2_1.concat());
// console.log(obj_2_2.concat());
// console.log(obj_2_1.concat());

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.

const s_3 = 'Hello';

if (!String.prototype.exclaim) {
	String.prototype.exclaim = function () {
		console.log(`${this}!`);
	}
}

// s_3.exclaim();

// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class

const Book = (function () {
	// constructor
	function Book(title, author) {
		this.title = title;
		this.author = author;

		// console.log(this);
	}

	// methods
	Book.prototype.getTitle = function () {
		return this.title;
	}

	Book.prototype.getAuthor = function () {
		return this.author;
	}

	return Book;
})();

const TechBook = (function (_super) {
	// constructor
	function TechBook(title, author, category) {
		_super.call(this, title, author);
		this.category = category;
	}

	Object.setPrototypeOf(TechBook.prototype, _super.prototype);
	// or
	// TechBook.prototype = Object.create(_super.prototype);

	// methods
	TechBook.prototype.getCategory = function () {
		return this.category;
	}

	TechBook.prototype.getBook = function () {
		return `${this.title}, ${this.author}, ${this.category}`;
	}

	return TechBook;
})(Book);

const book_4_1 = new Book('Learn JS', 'Unknown');
const book_4_2 = new TechBook('Learn JS', 'Unknown', 'JS');

// console.log(book_4_1);
// console.log(book_4_2);
// console.log(book_4_2.getTitle());

// 2 - Class
class Book2 {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	getTitle() {
		return this.title;
	}

	getAuthor() {
		return this.author;
	}
}

class TechBook2 extends Book2 {
	constructor(title, author, category) {
		super(title, author);
		this.category = category;
	}

	getCategory() {
		return this.category;
	}

	getBook() {
		return `${this.title}, ${this.author}, ${this.category}`;
	}
}

// console.log(new Book2('Learn JS2', 'Unknown2'));
// console.log(new TechBook2('Learn JS2', 'Unknown2', 'JS'));

// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.

// old version for static property
// Shape.count = 0

class Shape {
	static count = 0

	constructor() {
		Shape.count++;
	}
}

// console.log(new Shape());
// console.log(Shape.count);

class Rectangle extends Shape {
	static calcSquare(w, h) {
		return w * h;
	}

	// unuseful
	// constructor() {
	// 	super();
	// }

	calcSquare(w, h) {
		return w * h;
	}
}

// console.log(Rectangle.calcSquare(10, 20));
// console.log(Shape.count);
//
// console.log(new Rectangle().calcSquare(13, 15));
// console.log(Shape.count);

// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)

function Person() {
}

Person.prototype.setFirstName = function (firstName) {
	this.firstName = firstName;

	return this;
};
Person.prototype.setLastName = function (lastName) {
	this.lastName = lastName;

	return this;
};

const person_6_1 = new Person();
person_6_1.setFirstName('Name1').setLastName('setLastName1');

// console.log(person_6_1);

// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.

const data = {};

Object.defineProperties(data, {
	id: {
		value: 1,
		writable: true,
	},

	type: {
		value: 'primary',
		enumerable: true,
	},

	category: {
		get: function () {
			return this._category;
		},
		set: function (value) {
			this._category = value;
		},
		enumerable: true,
		configurable: true,
	}
});

data.category = 'JS';
data.a = -10;

// for (const dataKey in data) {
// 	console.log(dataKey);
// }

// console.log(Object.keys(data));

// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.

const data_8_1 = {
	a: 1,
	b: 2
};

Object.preventExtensions(data_8_1);

data_8_1.c = 3;
data_8_1.a = 2;

// console.log(data_8_1);

// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.

class Task {
	constructor(name) {
		this.name = name;
	}

	setStatus(status) {
		this.status = status;
	}

	toString() {
		return `[${this.status}] ${this.name}`
	}
}

Task.prototype.status = 'new';

const task_1 = new Task('Create');
const task_2 = new Task('Edit');
const task_3 = new Task('Save');
const task_4 = new Task('Delete');

// console.log(task_1, task_2, task_3, task_4);

console.log(task_1);
console.log(task_1.toString());

task_1.setStatus('Completed');
console.log(task_1.toString());

class TaskList {
	constructor() {
		this.tasks = [];
	}

	add(...task) {
		this.tasks.push(...task);

		return this;
	}

	print() {
		this.tasks.forEach(task => console.log(task.toString()))

		return this;
	}

	setCompleted(index) {
		this.tasks[index].setStatus('Completed');

		return this;
	}

	remove(task) {
		const index = this.tasks.findIndex(element => element === task.name);

		if (index >= 0) {
			this.tasks.splice(index, 1);
		}

		return this;
	}

	sort(direction) {
		const fn = (task1, task2) => direction * task1.name.localeCompare(task2.name)

		this.tasks.sort(fn);

		return this;
	}

	clear() {
		this.tasks.length = 0;
	}
}

const taskList_1 = new TaskList();

taskList_1.add(task_1, task_2, task_3, task_4).print();
taskList_1.sort(-1).print();
