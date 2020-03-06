const student= [
    {id: 11, name: "deepjol"},
    {id: 21, name: "Omor-sunny"},
    {id: 31, name: "Manna"},
    {id: 41, name: "Amit hasan"}
]

// const studentName=[];

// for(let i=0; i<student.length; i++){
//     const element= student[i];
//     const name= element.name;
//     studentName.push(name);
// }
// console.log(studentName);

// const studentName= student.map(array=>array.name);
// const ids= student.map(s=>s.id);

// console.log(ids);


// const ids= student.filter(s=>s.id>11);

// console.log(ids);

const ids= student.find(s=>s.id>11);

console.log(ids);