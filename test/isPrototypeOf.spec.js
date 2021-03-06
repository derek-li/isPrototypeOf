var canine = {
  bark: function() {
    console.log('bark');
  }
};

var dog = Object.create(canine);
dog.fetch = function() {
  console.log('fetch');
};

var myDog = Object.create(dog);
var empty = Object.create(null);

tests({

	'it should throw an error if the test prototype is null or not an object': function() {
		var returnResult;
		try {
			isPrototypeOf(null, {});
		} catch (e) {
			returnResult = (e instanceof TypeError);
		}
		eq(returnResult, true);
		try {
			isPrototypeOf(1, {});
		} catch (e) {
			returnResult = (e instanceof TypeError);
		}
		eq(returnResult, true);
		try {
			isPrototypeOf(undefined, {});
		} catch (e) {
			returnResult = (e instanceof TypeError);
		}
		eq(returnResult, true);
	},

	'it should return false if the test object is null or undefined': function() {
		var returnResult = isPrototypeOf(dog, null);
		eq(returnResult, false);
	},

	'it should return true if the first argument is a prototype of the second argument': function() {
		var returnResult = isPrototypeOf(dog, myDog);
		eq(returnResult, true);
	},

	'it should return false if the first argument is not a prototype of the second argument': function() {
		var returnResult = isPrototypeOf(myDog, dog);
		eq(returnResult, false);
	},

	'it should return true as long as the first argument is in the prototype chain of the second argument': function() {
		var returnResult = isPrototypeOf(canine, myDog);
		eq(returnResult, true);
	},

});