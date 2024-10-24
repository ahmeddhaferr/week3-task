let students = require("./data.json");
// 1
let getAllStudents = () => {
  return students;
};
// console.log(getAllStudents(students))
// 2
let getFirstStudent = () => {
  return students[0];
};
// console.log(getFirstStudent(students))
// 3
let getLastStudent = () => {
  return students[students.length - 1];
};
// console.log(getLastStudent(students))
// 4
let getStudentById = (id) => {
  return students.filter((students) => students.id === id);
};

// console.log(getStudentById(10))
// 5
let getStudentsByStage = (stage) => {
  return students.filter((students) => students.stage === stage);
};
// console.log(getStudentsByStage("Grade 10"))
// 6
let addStudent = (newStudent) => {
  students.push(newStudent);
  console.log(students);
};

// addStudent({
//   id: 21,
//   name: "Ahmed Dhafer",
//   stage: "Grade 12",
//   age: 24,
// });

// 7
let removeStudentById = (id) => {
  students = students.filter((students) => students.id !== id);
  console.log(students);
};
// removeStudentById(20)
// 8
let updateStudentById = (id, updatedData) => {
  students.filter(students=>students.id === id)
  student=updatedData
  console.log(student)
};
// updateStudentById(20,  {
//   "id": 22,
//   "name": "Lava King",
//   "stage": "Grade 10",
//   "age": 13
// })

// 9
let getAverageAge = () => {
  let x= students.reduce((sum,num) => sum + num.age,0)
  let avg =x/students.length
  console.log(avg)
};
// getAverageAge()

// 10
let getStudentsAboveAge = (age) => {
students=students.filter(students=>students.age > age)
return students
};
// console.log(getStudentsAboveAge(16))

// 11
let getStudentsBelowAge = (age) => {
  students=students.filter(students=>students.age < age)
return students
};
// console.log(getStudentsBelowAge(15))

// 12
let getStudentByName = (name) => {
  students=students.filter(students=>students.name === name)
  return students
};
// console.log(getStudentByName('Lucas Scott'))

// 13
let sortStudentsByName = () => {
students=students.sort((a, b) => a.name.localeCompare(b.name))
console.log (students)
};
// sortStudentsByName()

// 14
let sortStudentsByAge = () => {
  students=students.sort((a, b) => a.age - b.age)
  console.log (students)
};
// sortStudentsByAge()


// 15
let filterStudentsByAge = (age) => {
  students=students.filter(students=>students.age = age)
  console.log(students)
};
// filterStudentsByAge(14)

// 16
let filterStudentsByStage = (stage) => {
  students=students.filter(students=>students.stage = stage)
  console.log(students)
};
// filterStudentsByStage('Grade 10')

// 17
let countStudents = () => {
  console.log (students.length)
};
// countStudents()

// 18
let countStudentsByStage = (stage) => {
  students= students.filter(students=>students.stage ===stage)
  console.log(students.length)
};
// countStudentsByStage("Grade 9")


// 19
let incrementStudentAgeById = (id) => {
  students= students.find(students=>students.id ===id)
  console.log(students.age + 1)
};
// incrementStudentAgeById(3)

// 20
let decrementStudentAgeById = (id) => {
  students= students.find(students=>students.id ===id)
  console.log(students.age - 1)
};
// decrementStudentAgeById(3)

// 21
let getStudentsWithIdGreaterThan = (id) => {
  students= students.filter(students=>students.id > id)
  console.log(students)
};
// getStudentsWithIdGreaterThan(10)

// 22
let getStudentsWithIdLessThan = (id) => {
  students= students.filter(students=>students.id < id)
  console.log(students)
};
// getStudentsWithIdLessThan(10)

// 23
let getStudentsInRangeOfIds = (startId, endId) => {
  students= students.filter(students=>students.id > (startId) && students.id < (endId))
  console.log(students)
};
// getStudentsInRangeOfIds(10, 15)

// 24
let getTotalAgeOfStudents = () => {
  let x= students.reduce((a ,b) => a + b.age ,0)
  console.log(x)
};
// getTotalAgeOfStudents()

// 25
let getAverageAgeByStage = (stage) => {
 let x= students.filter(students=>students.stage ===stage)
  let z =x.reduce((a,b) => a+b.age,0)
  let avg=z/x.length
  console.log(avg)
};
// getAverageAgeByStage("Grade 10")

// 26
let getYoungestStudent = () => {
  students.sort((a,b)=> a.age - b.age)
  console.log(students[0])
};
// getYoungestStudent()

// 27
let getOldestStudent = () => {
  students.sort((a,b)=> a.age - b.age)
  let x=students[students.length -1]
  console.log(x)
};
// getOldestStudent()

// 28
let hasStudentWithName = (name) => {
  students= students.some(students=>students.name === name)
console.log(students)
};
// hasStudentWithName("Benjamin Evans")

// 29
let getNamesOfAllStudents = () => {
  students=students.map(students=>students.name)
  console.log(students)
};
// getNamesOfAllStudents()

// 30
let getAllStudentIds = () => {
  students=students.map(students=>students.id)
  console.log(students)
};
// getAllStudentIds()

// 31
let getAllStudentStages = () => {
  students=students.map(students=>students.stage)
  console.log(students)
};
// getAllStudentStages()

// 32
let getStudentsWithNamesStartingWith = (letter) => {
  students=students.filter(students=>students.name[0] === letter )
  console.log(students)
};
// getStudentsWithNamesStartingWith('A')

// 33
let getStudentsWithNamesEndingWith = (letter) => {
  students=students.filter(students=>students.name[students.name.length -1] === letter )
  console.log(students)
};
// getStudentsWithNamesEndingWith('n')

// 34
let getStudentsWithNameLengthGreaterThan = (length) => {
  let x=students.filter(students=>students.name.length > length )
  console.log(x)
};
// getStudentsWithNameLengthGreaterThan(12)

// 35
let getStudentsWithNameLengthLessThan = (length) => {
  let x=students.filter(students=>students.name.length < length )
  console.log(x)
};
// getStudentsWithNameLengthLessThan(10)

// 36
let getAllStudentsSortedById = () => {
  students=students.sort((a,b)=>a.id - b.id)
  console.log(students)
};
// getAllStudentsSortedById()

// 37
let reverseStudentList = () => {
  students=students.sort((a,b)=>b.id - a.id)
  console.log(students)
};
// reverseStudentList()

// 38
let getRandomStudent = () => {
  let student=Math.floor(Math.random() * students.length)
  return students[student]
};
// console.log(getRandomStudent())

// 39
let removeStudentsAboveAge = (age) => {
  let y=students
  let x=y.filter(y=>y.age < age )
console.log(x)
};
// removeStudentsAboveAge(16)

// 40
let removeStudentsBelowAge = (age) => {
  let y=students
  let x=y.filter(y=>y.age > age )
console.log(x)
};
// removeStudentsBelowAge(15)

// 41
let getStudentsBetweenAges = (minAge, maxAge) => {
  students=students.filter(students=>students.age > minAge && students.age < maxAge)
  console.log (students)
};
// getStudentsBetweenAges(15,17)

// 42
let countStudentsAboveAge = (age) => {
  students=students.filter(students=>students.age > age)
  console.log(students.length)
};
// countStudentsAboveAge(15)

// 43
let countStudentsBelowAge = (age) => {
  students=students.filter(students=>students.age < age)
  console.log(students.length)
};
// countStudentsBelowAge(15)

// 44
let addMultipleStudents = (newStudents) => {
  x = students.push(newStudents)
  console.log(students);
  
};
// let stu =[
//   {
//     "id": 21,
//     "name": "Charlie Wilson",
//     "stage": "Grade 10",
//     "age": 15
//   },
//   {
//     "id": 22,
//     "name": "Grace Lee",
//     "stage": "Grade 9",
//     "age": 14
//   }]

// addMultipleStudents(stu)

// 45
let removeMultipleStudentsById = (ids) => {
  students=students.filter(students=> !ids.includes(students.id))
  console.log(students)
};
// let x=[20,19]
// removeMultipleStudentsById(x)


// 46
let updateMultipleStudentsById = (ids, updatedData) => {
  let x = students.map(y => {
    if (ids.includes(y.id)) {
      return { ...y, ...updatedData };
    }
    return y; 
  });

  console.log(x);
};
// let z=[19,20]
// updateMultipleStudentsById(z,{ age:20 })

// 47
let isAllStudentsAboveAge = (age) => {
  return students.every(student => student.age > age)

};
// console.log(isAllStudentsAboveAge(12))

// 48
let isAllStudentsBelowAge = (age) => {
  return students.every(student => student.age < age)
};
// console.log(isAllStudentsBelowAge(18))

// 49
let hasStudentsInStage = (stage) => {
  return students.some(students=>students.stage === stage)
  
};
// console.log(hasStudentsInStage("Grade 12"))

// 50
let getStudentNamesWithIds = (ids) => {
  students=students.find(students=>students.id === ids)
  console.log(students.name)
};
// getStudentNamesWithIds(12)