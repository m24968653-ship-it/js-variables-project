const student={
    name:"Mohammed Mahmoud Abdelnabi",
    age:16,
    grade:11,
    job:"student",
}

console.log(`${student.name} is now in grade ${student.grade} and he is a ${student.job}`);

student.grade=12;
student.job="Programmer";


console.log(`${student.name} is now in grade ${student.grade} and he is a ${student.job}`);

const anotherStudent = student;

anotherStudent.grade = 99;

console.log("Original:", student);
console.log("Copy:", anotherStudent);