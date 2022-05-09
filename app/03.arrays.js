console.log('Topic: Arrays');

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.

const arr_1 = [1, 2, 3, 4, 5];
const lastEl_1 = arr_1[arr_1.length - 1];
const lastEl_2 = arr_1.pop();

// console.log(lastEl_1);
// console.log(lastEl_2);

// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

const arr_2 = [1, 2, 3, 4, 5];

arr_2.push(6);

const arr_2_1 = [...arr_2, 7];

// console.log(arr_2_1);

// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

const index_3 = 3;

const arr_3 = [1, 2, 3, 4, 5];
arr_3.splice(index_3, 0, 8);

// console.log(arr_3);

const arr_3_1 = [...arr_3.slice(0, index_3), 10, ...arr_3.slice(index_3, arr_3.length)];

// console.log(arr_3_1);

// Task 04
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.

const arr_4 = [1, 2, 3, 4, 5];

for (const item of arr_4) {
	// console.log(item);
}

// Task 05
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.

const arr_5 = [1, 20, 8, 35, 44, 5, 82, 15, 51, 95, 11, 73];

const sum_5 = arr_5.filter(item => item > 50).reduce((acc, value) => acc + value, 0);

// console.log(sum_5);

// Task 06
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.

const arr_6 = ['This', 'string', 'should', 'contain', 'all', 'elements', '!' ]
const str_6 = arr_6.join(' ');

// console.log(str_6);

// Task 07
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.

const arr_7 = [1, 15, 6, 5, 6, 18, 7, 11, 3, 20];

// console.log(arr_7.sort((a, b) => a - b));
// console.log(arr_7.sort((a, b) => a - b).reverse());
// console.log(arr_7.sort((a, b) => b - a));

// Task 08
// RU: Создать массив [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 100_001, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 100_001, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.

const arr_8 = [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2];
const arr_8_1 = [...arr_8.filter(item => item < 0), ...arr_8.filter(item => item === 0), ...arr_8.filter(item => item > 0)];

// console.log(arr_8);
// console.log(arr_8_1);

// Task 09
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.

const styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
styles.splice(-2, 1, "Classics");
// or
// styles[styles.length - 2] = "Classics";
styles.unshift("Rap", "Reggae");

// console.log(styles);

// Task 10
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.

const str_10 = 'dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh';
const count_r = str_10.split('r').length - 1;
const count_k = str_10.split('k').length - 1;
const count_t = str_10.split('t').length - 1;

// console.log(count_r);
// console.log(count_k);
// console.log(count_t);

// Task 11
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

const arr_11 = [1, 15, 6, 5, 6, 18, 7, 11, 3, 20];
const randomEl = arr_11[Math.floor(Math.random() * arr_11.length)];

// console.log(randomEl);

// Task 12
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.

const arr_12 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (const item of arr_12) {
	// console.log(item.join(' '));
}

// Task 13
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.

const arr_13 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(arr_13.flat());
// or
// console.log(arr_13.flat(Infinity));

// Task 14
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.

const arr_14 = [1, 15, 6, 5, 6, 18, 7, 11, 3, 20];
const a = 2;
const b = 5;
const arr_14_1 = arr_14.slice(a, b + 1);

// console.log(arr_14_1);

// Task 15
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and display it in the console.

const arr_15 = [1, 15, 6, 5, 6, 18, 7, 11, 3, 20];
const findElement = 18;
const index_15 = arr_15.findIndex(value => value === findElement);
// or
const index_15_1 = arr_15.indexOf(findElement);

// console.log(index_15);
// console.log(index_15_1);

// Task 16
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.

const arr_16 = [1, 15, 6, 5, 6, 18, 7, 11, 3, 20, 6, 15, 7];
const arr_16_1 = [...new Set(arr_16)];

// console.log(arr_16_1);

// Task 17
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

const arr_17 = [1, 15, 6, 5, 6, 18, 7, 11, 3, 20, 6, 15, 7];

for (const value of arr_17) {
	if (arr_17.indexOf(value) !== arr_17.lastIndexOf(value)) {
		arr_17.forEach((el, index, arr) => {
			if (el === value) {
				arr[index] = '*'
			}
		})

		break;
	}
}

// console.log(arr_17);

// Task 18
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.

const arr_18 = [1, 15, 6, 5, 6, 18, 7, 110, 3, 20, 6, 15, 7];
const arr_18_2 = arr_18.map(el => `0b${el.toString(2)}`);
const arr_18_8 = arr_18.map(el => `0o${el.toString(8)}`);
const arr_18_16 = arr_18.map(el => `0x${el.toString(16)}`);

// console.log(arr_18_2);
// console.log(arr_18_8);
// console.log(arr_18_16);

// Task 19
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.

const str_19 = 'a big brown fox jumps over the lazy dog';
const arr_19 = str_19.split(' ').filter(el => el.length < 4);

// console.log(arr_19);

// Task 20
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

const arr_20 = ['big', 'dog', 1, 2];
const result = arr_20.every(el => typeof el === 'String');

// console.log(result);

// Task 21
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.

const arr_21 = [1, 3, 45, 67, 89, 102, 345];

function binarySearch(arr, value) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;
	let midIndex;

	if (value < arr[leftIndex] || value > arr[rightIndex]) {
		return -1;
	}

	while (leftIndex <= rightIndex) {
		midIndex = Math.floor((leftIndex + rightIndex) / 2);

		if (value === arr[midIndex]) {
			return midIndex;
		} else if (value < arr[midIndex]) {
			rightIndex = midIndex - 1;
		} else if (value > arr[midIndex]) {
			leftIndex = midIndex + 1;
		}
	}

	return -1;
}

// console.log(binarySearch(arr_21, 4));
// console.log(binarySearch(arr_21, 3));
// console.log(binarySearch(arr_21, 1));
// console.log(binarySearch(arr_21, 345));
// console.log(binarySearch(arr_21, 102));
// console.log(binarySearch(arr_21, 103));
//
//
//
//
const arr_22 = [1, 3, 45, 67, 89, 102, 345];
arr_22.copyWithin(0,3, 6);
// console.log(arr_22);