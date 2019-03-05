var Student = {name: 'Le Wuan Jain', age: 24, class: '14CNTT'};
console.log(Student);

var StudentA = new Object();
StudentA.name = 'Le Thi Na';
StudentA.age = 25;
StudentA.class = '14IT';
console.log(StudentA);


Animal = {
    AddAnimal : function(name, legs, sex){
        this.name = name;
        this.legs = legs;
        this.sex = sex;
    }
}
Animal.AddAnimal('dog', 4, 'boy');
console.log(Animal);
console.log(Animal.legs);
console.log(Animal['legs']);

arr = [1,3,4,5,6,7,8, Student]
console.log(arr);
console.log("Hello dogs!");


