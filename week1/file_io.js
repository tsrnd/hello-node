// Enter a list students from the keyboard, write to the "output.txt" the students do not exist in "input.txt"
var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];
var output = [];

var input = fs.readFileSync('input_file_io.txt','utf8').split('\n');

for (let i = 1; ; i++) {
    let student = {};
    student.name = readlineSync.question(`Please enter student's name ${i}: `);
    if (student.name === `exit`){
        break;
    }
    student.age = readlineSync.question(`And it's age: `);
    students.push(student);
    if (!input.includes(student.name + ` ` + student.age)){
        output.push(student.name + ` ` + student.age);
    }
};

if (output.length > 0) {
    fs.writeFile('output_file_io.txt', output.join('\n'), function(err) {
        if (err) {
            return console.error(err);
        }
    });
}

console.log(`List students you entered:\n`, students);
