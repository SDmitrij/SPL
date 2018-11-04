//To keep students data
var globalStudents = [];

//Global class
function Students(name, age) {
    this.name = name;
    this.age = age;
    
    this.setStudData = function() {
        var studObj = {name: this.name, age: this.age};
        globalStudents.push(studObj);
    };
    this.setStudData();
}

var studFirst = new Students('Vasya', 21);
var studSec = new Students('Petya', 20);
var studThird = new Students('Igor', 19);
var studFourth = new Students('Vlad', 22);
//Compare students by names
globalStudents.sort(function toCompareNames(a ,b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

for (var i = 0; i < globalStudents.length; i++) {
    console.log(globalStudents[i]);
}

//Object {name: "Igor", age: 19}
//Object {name: "Petya", age: 20}
//Object {name: "Vasya", age: 21}
//Object {name: "Vlad", age: 22}
