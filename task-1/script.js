//task1
function customForEach(callback) {
    for (let index = 0; index < this.length; index++) {
        resultForEach = callback(this[index], index, this)
    }
}
Array.prototype.customForEach = customForEach;

function customMap(callback) {
    const resultMap = [];
    for (let index = 0; index < this.length; index++) {
        resultMap.push(callback(this[index], index, this))
    }
    return resultMap;
}
Array.prototype.customMap = customMap;

function customFind(callback) {
    for(let index = 0; index < this.length; index++) {
        const resultCb = callback(this[index], index, this)
        const resultFind = this[index]
        if(resultCb) {
            return resultFind;
        }
    }
}
Array.prototype.customFind = customFind;

function customFilter(callback) {
    const resultFilter = [];
    for(let index = 0; index < this.length; index++) {
        const result = callback(this[index], index, this)
        if(result) {
            resultFilter.push(this[index])
        }
    }
    return resultFilter
}
Array.prototype.customFilter = customFilter;

function customReduce(callback, initialValue) {
    let accum;
    let current;
    let index = 0;
    if(initialValue) {
        accum = initialValue
    } else {
        accum = this[index];
        index++;
    }
    for (; index < this.length; index++) {
      current = this[index];
      accum = callback(accum, current, index, this);
    }
    return accum;
}
Array.prototype.customReduce = customReduce;

//task2
const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

let arrSubjects = Object.entries(subjects)

let lessonStr = ''
let sumStudents = 0;
let sumTeachers = 0;
let studentsMean = 0;
let arrLesson = [];

arrSubjects.customForEach(([key, value]) => {
    lessonStr +=  key.toString()+','
    sumStudents += value.students;
    sumTeachers += value.teachers
    studentsMean = sumStudents / Object.keys(arrSubjects).length;
    arrLesson.push(value)
    arrLesson.sort((x, y) => y.teachers - x.teachers)
});

console.log(lessonStr)
console.log(sumStudents)
console.log(sumTeachers)
console.log(studentsMean)
console.log(arrLesson)

