
//OPITION__1__/////////////////////////////////class A by function
console.log('OPTION__1:____________________')
function A (d, f) { //constructure 
	this.Name=d + 1
	this.Age= f + 1
	//atribute
	var desc = "desc" 
};
a1 = new A(1,2)
a2 = new A(2,3)
console.log(a1)//2,3
console.log(a2)//3,4

//--------------re-define -> ok
var A = function (d, f) { //constructure uu tien hon
	this.Name=d
	this.Age= f
	//atribute
	var desc = "my_desc"
    this.getAge = function () {//function cach 1
        console.log(desc) // my_desc
		return this.Age;
	}
	this.getName = getName //function cach 2
}; 

function getName() {//function
        // console.log(desc) // error
		return this.Name;
	}

A.prototype.getNameAge = function(){//function cah 3
	return this.getName() + this.getAge()
};

a1 = new A(1,2)
a2 = new A(2,3)
console.log(a1)//1,2
console.log(a2)//2,3

console.log(a2.getAge())
console.log(a2.getName())
console.log(a2.getNameAge())

//--------------re-define -> refuse because constructor above is more prioter

function A (d, f) { //constructure 
	this.Name=d + 1
    this.Age= f + 1
};


a1 = new A(1,2)
a2 = new A(2,3)
console.log(a1)//1,2 
console.log(a2)//2,3

// -------------------practice this kind class
console.log('PRACTICE OPTION__1:____________________')

A.prototype.getK = function(callback){ //use callback or return this.Name
	return callback();
};
// add function into class
var a1 = new A(5,6);
console.log(a1);
console.log(a1.desc);//undefind
console.log("Func getK: ", a1.getK(function(){
    return this.Name
}.bind(a1)));  //bind if a1==> result: 5

console.log(a1.desc);//undiefined
//In javascript , we can change all function, atribute ,just re-define it
a1.Age=3;
console.log(a1.Age);//3
A.prototype.getName = function(){
    A.prototype.getName.call(this);
	return this.Age;
};
console.log("ooooo",a1.getName());//3
var A = function () { //constructure
	this.Name="a"; 
	this.Age= 10;
};


//OPITION__2__/////////////////////////////////////// object A belong with class Object
console.log('OPTION__2:____________________')

var A = {
	Name: 9,
	Age: 10,
	getSumNameAgeCall: function (call) {
        var self = this; // this is A
        return new Promise(function(resolve, reject) {
            resolve(self.Name + self.getAge() + call()); // self is A and this here is Promise
        }).then(function(data){
            console.log("getSumNameAgeCall: ", data)
        });
	},

	getAge: function () {
		return this.Age
	},

	getName: function (call) {
		call()
		return this.Name
	}
}
// uses of bind
console.log("Name is ",A.getName(function() {
    console.log(this.Name)  // this la A print 9
}.bind(A))) // print "Name is  9"
console.log("Name is ", A.getName(function() {
    console.log(this.Name)  // this la func -> print undefined
})) // print "Name is  9"



console.log(A.getSumNameAgeCall(A.getAge.bind(A)))
//not bind(this) because not define this
// result: 9+10+10= 29

// phan biet arrow func
// A.getSumNameAgeCall() la loi goi khong phai func nen k co this
console.log(A.getSumNameAgeCall(function() {
    Name = 2
    console.log("Name of func ", this.Name) // print 1 because this is this of function
    return 1
}))
console.log(A.getSumNameAgeCall(function() {
    Name = 2
    console.log("Name of func if bind ", this.Name) // print 1 because this is this of function
    return 1
}.bind(A)))
console.log(A.getSumNameAgeCall(() => {
    Name = 2
    console.log("Name of arrow func ", this.Name) //undefined trong arrow func k co this
    return 1
}))


//OPITION__3__////////////////////////////////////// class by function class for ES6 

console.log('OPTION__3:____________________')

class Parent{
    constructor(Name) {
        this.Name = Name
    }
    getName() {
        return this.Name
    }
}

class MyChild extends Parent {
    constructor(Name) {
      super(Name);
    }
    getName() {
        return this.Name +1 
    }
}

b = new MyChild(9)
console.log("Name child is ",b.getName())
