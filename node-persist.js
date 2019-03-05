// Load module node-persist
var storage = require('node-persist');
 
// Hàm khởi tạo
// Load dữ liệu đã lưu trên ổ đĩa
storage.init({
    dir : "students"
}).then(promise);


//get All students function
function getAllStudents () {
    // get data from students
    var students = storage.getItem('students');
     
    if (typeof students === "undefined"){
        return [];
    }
     
    return students;
}

// get detail of student function
function getStudent(studentID) {
    // get all students
    var students = getAllStudents();
     
    // student is choosed
    var matchedStudent = null;
     
    for (var i = 0; i < students.length; i++){
        if (students[i].id === studentID){
            matchedStudent = students[i];
            break;
        }
    }
     
    return matchedStudent;
}

// add 1 student func
function addStudent(id, fullname) {
    var students = getAllStudents();
    console.log(students)
    // students.push({
    //     id : id,
    //     fullname : fullname
    // }); 
    storage.setItem('students', students);
}

// delete student function
function deleteStudent(studentID) {
    var students = getAllStudents();
     
    for (var i = 0; i < students.length; i++){
        if (students[i].id === studentID){
            students.splice(i, 1);
        }
    }
     
    storage.setItem('students', students);
}

// edit 1 student func
function editStudent(id, fullname) {
    var students = getAllStudents();
 
    for (var i = 0; i < students.length; i++){
        if (students[i].id === id){
            students[i].fullname = fullname;
        }
    }
     
    storage.setItem('students', students);
}

// show list students
function showStudents() {
    var students = getAllStudents();

//     students.forEach(function(student){
//         console.log('Student: ' + student.fullname + ' (' + student.id + ')');
//     });
}

// Thêm sinh viên
addStudent(1, 'Cuong');
addStudent(2, 'Kinh');
addStudent(3, 'Chinh');
addStudent(4, 'Quyen');
 
// Hiển thị danh sách sinh viên
showStudents();