console.log('Topic: Iterators');
// Task 1
// RU: Написать функцию keyValueIterable(target),
//     которая на вход получает объект и возвращает итерируемый объект.
//     Итерируемый объект позволяет получить пары ключ/значение.
//     Выведите в консоль цвета из объекта colors.
// EN: Create a function keyValueIterable(target)
//     which takes an objects and returns iterable object.
//     Iterable object allows you to get key/value pairs.
//     Display in a console all colors from the object colors.

function keyValueIterable(target) {
	target[Symbol.iterator] = function () {
		const keys = Object.keys(target);

		return {
			next() {
				const done = keys.length === 0;
				const key = keys.shift();

				return { value: [key, target[key]], done };
			}
		};
	}

	return target;
}

const colors = {
	green: '#0e0',
	orange: '#f50',
	pink: '#e07'
};

const itColors = keyValueIterable(colors);

for (const [, color] of itColors) {
  // console.log(color);
}


// Task 2
// RU: В коллекции хранятся все имена пользователей, которые присоединились к определенной группе телеграмм.
//     Булевый флаг указывает, является ли пользователь администратором группы.
//     Создайте итератор, который возвращает только имена администраторов.
// EN: The following collection store all the names of the user that have joined a particular telegram group.
//     The boolean flag indicates whether a user is an administrator of the group.
//     Сreatereate an iterator that returns only the administrators' names.

const users = {
  anna: false,
  boris: true, // admin
  christina: false,
  dave: false,
  elena: false,
  felix: true,  // admin
};

users[Symbol.iterator] = function () {
	const keys = Object.keys(this).filter(key => this[key]);
	let index = 0;
	let done = false;

	return {
		next() {
			done = index >= keys.length;

			return { value: keys[index++], done };
		},
	};
};

[...users].forEach(name => {
	// console.log(name);
}); // boris, felix


// Task 3
// RU: Написать функцию take(sequence, amount), которая из бесконечного итерируемого объекта random
//     вернет указаное количество элементов.
// EN: Create a function take(sequence, amount), which returns a specified amount of numbers
//     from iterable object random

const random = {
  [Symbol.iterator]: () => ({
    next: () => ({
      value: Math.random()
    })
  })
};

function take(sequence, amount) {

	return {
		[Symbol.iterator]() {
			const iterator = sequence[Symbol.iterator]();

			return {
				next() {
					if(amount-- < 1) {
						return {value: undefined, done: true};
					}

					return iterator.next();
				},
			}
		}
	};
}

const a = [...take(random, 3)];

// console.log(a);

// Task 4
// RU: Написать итерируемый итератор, который возвращает числа Фибоначи
//     Реализовать метод return для остановки итератора с помощью for-of + break
// EN: Create iterable iterator, which produces Fibonacci numbers
//     Implement method return, which allows you to stop iterator using for-of + break

const Fib = {
	[Symbol.iterator]() {
		let n1 = 1;
		let n2 = 1;

		return {
			[Symbol.iterator]() {
				return this;
			},
			next() {
				let current = n2;
				n2 = n1;
				n1 = n1 + current;

				return { value: current, done: false }
			},
			return(value) {
				return { value, done: true };
			}
		};
	}
}

for (let v of Fib) {
  // console.log(v);

  if (v > 50) break;
}

// Task 5
// RU: Написать итератор для чисел, который позволит получать массивы последовательных целых элементов.
//     Например, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
// EN: Create iterator for numbers, which allows you to get arrays of sequential integers.
//     Example, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]

// const obj = new Number(123);
// console.log(obj);

Number.prototype[Symbol.iterator] = function () {
	const value = this.valueOf();
	let current = 0;

	return {
		next() {
			if(value < 0) {
				return current < value ? { value: undefined, done: true } : { value: current--, done: false };
			}

			return current > value ? { value: undefined, done: true } : { value: current++, done: false };
		}
	};
}

// console.log([...-5]);
// console.log([...5]);
