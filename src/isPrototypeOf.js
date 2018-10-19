function isPrototypeOf(testPrototype, object) {
	//Base cases
	if (testPrototype === null || typeof testPrototype !== 'object') {
		throw new TypeError("First argument must be an object.");
	}

	if (object === null || object === undefined) {
		return false;
	}

	var prototype = Object.getPrototypeOf(object);

	if(prototype === testPrototype) {
		return true;
	//Recursive case as long as there is a prototype
	} else {
		return isPrototypeOf(testPrototype, prototype);
	}
}
