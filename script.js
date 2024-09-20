// complete this js code
class Person{
	constructor(name, age) {
		this._name=name;
		this._age=age;
	}
	get name(){
		return this._name;
	}
	get age(){
		return this._age;
	}
	printPersonDetails(){
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old`)
	}
}


class Employee extends Person{
	constructor(name, age,jobTitle) {
		this._name=name;
		this._age=age;
		this._jobTitle=jobTitle
	}
	get name(){
		return this._name;
	}
	get age(){
		return this._age;
	}
	get jobTitle(){
		return this._jobTitle
	}
	printEmployeeDetails(){
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
