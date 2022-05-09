console.log('Practice: Promises');

const doAsyncResolve = (value = 'Ok') => Promise.resolve(value);
const doAsyncReject = (value = 'Database Error') => Promise.reject(value);

let isLoading = true;

const doAsync = (value = 'Ok', timeout = 1000, executor = `resolve`,) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			executor === 'resolve' ? resolve(value) : reject(`Rejected!`);
		}, timeout);
	});
};

// Task 1
function doAsync_1() {
	return new Promise((resolve, reject) => {
		console.log('In promise');

		setTimeout(() => {
			console.log('resolving ...');

			resolve();
		}, 2000);
	});
}

// let promise_1 = doAsync();

// Task 2
function doAsync_2() {
	return new Promise((resolve, reject) => {
		console.log('In promise');

		setTimeout(() => {
			console.log('rejecting ...');

			reject();
		}, 2000);
	});
}

// let promise_2 = doAsync_2();

// Task 3 Resolve
doAsyncResolve().then(
	function () {
		// console.log('Resolved!');
	},
	function () {
		console.log('Rejected!');
	}
);

doAsyncResolve().then(
	function (value) {
		// console.log(`Resolved! ${value}`);
	},
	function (reason) {
		console.log(`Rejected! ${reason}`);
	}
);

// Task 4 Reject
doAsyncReject().then(
	function () {
		console.log('Resolved!');
	},
	function () {
		// console.log('Rejected!');
	}
);

doAsyncReject().then(
	function (value) {
		console.log(`Resolved! ${value}`);
	},
	function (reason) {
		// console.log(`Rejected! ${reason}`);
	}
);
// or
doAsyncReject().then(
	null,
	function (reason) {
		// console.log(`Rejected! ${reason}`);
	}
);

doAsyncReject().catch(
	function (reason) {
		// console.log(`Rejected! ${reason}`);
	}
);

// Task 5
doAsyncResolve().then(
	function () {
		// throw new Error('Error');
	},
	function (reason) {
		console.log(`Rejected! ${reason}`);
	}
); // Uncaught (in promise) Error: Error
// Better solution
doAsyncResolve().then(
	function () {
		throw new Error('Error');
	},
).catch(
	function (reason) {
		// console.log(`Rejected! ${reason}`);
	}
); // Rejected! Error: Error


// Task 6
function doAsync_6() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Promise.reject('Ups')); // rejected
		}, 2000);
	});
}

doAsync_6().then(
	function (value) {
		console.log(`Success: ${value}`);
	},
	function (reason) {
		// console.log(`Error: ${reason}`);
	}
);

// Task 7
doAsyncReject().then((value) => {
	console.log(`Resolved! ${value}`);
}).catch((reason) => {
	// console.log(`Rejected! ${reason}`);
});

// Task 8
function doAsync_8() {
	return new Promise((resolve, reject) => {
		// console.log('In promise');

		throw new Error('Exception in executor');

		setTimeout(() => {
			console.log('resolving ...');

			resolve();
		}, 2000);
	});
}

doAsync_8().then((value) => {
	console.log(`Resolved! ${value}`);
}).catch((reason) => {
	// console.log(`Rejected! ${reason}`);
}); // Rejected! Error: Exception in executor

// Task 9
doAsyncResolve().then(value => {
	// console.log(`Resolved! ${value}`);

	throw new Error('Error in callback');
}).catch(reason => {
	// console.log(`Rejected! ${reason}`);
}); // Rejected! Error: Error in callback

// Task 9
function doSyncReject_9() {
	// ...

	throw new Error('Exception in doSyncReject_9');
}

(function () {
	// doSyncReject_9();
	// Uncaught Error: Exception in doSyncReject_9

	return doAsyncResolve(1).then(
		value => {
			// console.log(`Resolved! ${value}`);

			return value;
		}
	).catch(
		reason => console.log(`Rejected! ${reason}`)
	);
})().then(
	// value => console.log(value)
).catch(
	error => console.log(error)
);
// Better solution
(function () {
	try {
		doSyncReject_9();

		return doAsyncResolve(1).then(
			value => console.log(`Resolved! ${value}`)
		).catch(
			reason => console.log(`Rejected! ${reason}`)
		);
	} catch (err) {
		return Promise.reject(err);
	}
})().then(
	value => console.log(value)
).catch(
	error => {
		// console.log(error); // Error: Exception in doSyncReject_9
	}
);
// another solution
(function () {
	return Promise.resolve().then(() => {
		doSyncReject_9();

		return doAsyncResolve(1).then(
			value => {
				console.log(`Resolved! ${value}`);

				return value;
			}
		).catch(
			reason => console.log(`Rejected! ${reason}`)
		);
	});

})().then(
	value => console.log(value)
).catch(
	error => {
		// console.log(error) // Error: Exception in doSyncReject_9
	}
);

// Task 10
window.addEventListener('unhandledrejection', event => {
// 	console.log('Promise:', event.promise);
// 	console.log(`Reason: ${event.reason}`);
});

// const rejectedPromise_10 = Promise.reject('Error');

// Task 11
window.addEventListener('unhandledrejection', event => {
// 	console.log('Promise:', event.promise);
// 	console.log(`Reason: ${event.reason}`);
//
// 	event.preventDefault();
});

// const rejectedPromise_11 = Promise.reject('Error');

// Task 12
window.addEventListener('rejectionhandled', event => {
// 	console.log('Promise rejected; promise:', event.promise);
// 	console.log(`Promise rejected; reason: ${event.reason}`);
});

// const rejectedPromise_12 = Promise.reject('Error');
setTimeout(() => {
	// rejectedPromise_12.catch(() => {});
}, 0);

// Task 13
// ES2018: method finally
const p_13 = new Promise((resolve, reject) => {
	resolve('Ok');
}).then(
	v => {
		// console.log(`Resolved: ${v}`);
	}
).catch(
	e => {
		console.log(`Error: ${e}`);
	}
).finally(
	() => {
		isLoading = false;
		// console.log(`isLoading: ${isLoading}`);
	}
);

// Task 14
const p_14 = new Promise((resolve, reject) => {
	reject('Database Error');
}).then(
	v => {
		console.log(`Resolved: ${v}`);
	}
).catch(
	e => {
		// console.log(`Error: ${e}`);
	}
).finally(
	() => {
		isLoading = false;
		// console.log(`isLoading: ${isLoading}`);
	}
);

// Task 15
const p_15 = new Promise((resolve, reject) => {
	throw new Error('Error');
}).then(
	v => {
		console.log(`Resolved: ${v}`);
	}
).catch(
	e => {
		// console.log(`Error: ${e}`);
	}
).finally(
	() => {
		isLoading = false;
		// console.log(`isLoading: ${isLoading}`);
	}
);

// Task 16
const p_16 = new Promise((resolve, reject) => {
	resolve('Ok')
}).then(
	v => {
		throw new Error('Error in then')
	}
).catch(
	e => {
		// console.log(`Error: ${e}`);
	}
).finally(
	() => {
		isLoading = false;
		// console.log(`isLoading: ${isLoading}`);
	}
);

// Task 17
const p_17 = new Promise((resolve, reject) => {
	reject('Error')
}).then(
	v => {
		throw new Error('Error in then')
	}
).catch(
	e => {
		// throw new Error(`Error: ${e}`)
	}
).finally(
	() => {
		isLoading = false;
		// console.log(`isLoading: ${isLoading}`);
	}
);

// Task 18
doAsyncResolve().then((value) => {
	// console.log(`Resolved! ${value}`);

	return "Nice";
}).then((value) => {
	// console.log(value);
});

// Task 19
// Wrong solution
doAsyncResolve().then((value) => {
	// console.log(`Resolved! ${value}`);

	doAsyncResolve().then((value) => {
		// console.log(value);
	});
});
// Better solution
doAsyncResolve().then((value) => {
	// console.log(`Resolved! ${value}`);

	return doAsyncResolve(); // return Promise
}).then((value) => {
	// console.log(value);
});

// Task 20
const doAsync_20_1 = doAsync(1, 3000);
const doAsync_20_2 = doAsync(2, 5000);

Promise.all([doAsync_20_1, doAsync_20_2]).then((values) => {
	// console.log(values[0] + values[1]);
}).catch(reason => {
	console.log(`Error: ${reason}`);
});
// (after 5 sec)
// 3

// Task 21
const doAsync_21_1 = doAsync(3, 3000, 'reject');
const doAsync_21_2 = doAsync(4, 5000);

Promise.all([doAsync_21_1, doAsync_21_2]).then((values) => {
	console.log(values[0] + values[1]);
}).catch(reason => {
	// console.log(`Error: ${reason}`);
});
// (after 3 sec)
// 'Error: Rejected!'

// Task 22
const doAsync_22_1 = doAsync(5, 3000);
const doAsync_22_2 = doAsync(6, 5000);

Promise.race([doAsync_22_1, doAsync_22_2]).then(() => {
	// console.log('Success!');
}).catch(reason => {
	console.log(`Error`);
});
// (after 3 sec)
// 'Success!'

// Task 23
const doAsync_23_1 = doAsync(7, 3000, 'reject');
const doAsync_23_2 = doAsync(8, 5000);

Promise.race([doAsync_23_1, doAsync_23_2]).then(() => {
	console.log('Success!');
}).catch(reason => {
	// console.log(`Error`);
});
// (after 3 sec)
// 'Error'

// Task 24
//ES2020: method Promise.allSettled
const doAsync_24_1 = doAsyncResolve(1);
const doAsync_24_2 = doAsync(9, 5000);

Promise.allSettled([doAsync_24_1, doAsync_24_2]).then((result) => {
	// console.log(result);
	// console.log(result[0].value + result[1].value);
}).catch(reason => {
	console.log(`Error`);
});
// (after 5 sec)
// 10

// Task 25
const doAsync_25_1 = doAsyncResolve(1);
const doAsync_25_2 = doAsyncReject('some reason');

Promise.allSettled([doAsync_25_1, doAsync_25_2]).then(
	(result) => {
		// console.log(result);
	},
	(reason) => {
		console.log(`Error`);
	}
);

// Task 26
//ES2021: method Promise.any
const doAsync_26_1 = doAsyncResolve(1);
const doAsync_26_2 = doAsync('Ok', 5000);

Promise.any([doAsync_26_1, doAsync_26_2]).then(
	(result) => {
		// console.log(result);
	}
); // 1

// Task 27
const doAsync_27_1 = doAsyncReject(1);
const doAsync_27_2 = doAsyncReject(2);

Promise.any([doAsync_27_1, doAsync_27_2]).then(
	(result) => {
		console.log(result);
	}
).catch(reason => {
	console.log(reason);
}); // AggregateError: All promises were rejected