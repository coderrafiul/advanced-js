// const numbers=[3, 5, 7, 9];
// const output= [];

// for(let i=0; i<numbers.length; i++){
//     const element= numbers [i];
//     const result= element * element;
//     output.push(result);

// }
// console.log(output);







// const numbers=[3, 5, 7, 9];

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })




// const numbers=[3, 5, 7, 9];

// function square(element){
//     return element * element;

// }

// const result= numbers.map(square);
// console.log(result);




const numbers=[3, 5, 7, 9];

// function square(element){
//     return element * element;

// }

// const square= element => element*element;

// const square= x => x * x;

// const result= numbers.map(square);
// console.log(result);

const result= numbers.map(x=>x*x);
console.log(result);

// const result= numbers.filter(x => x<=5);
// console.log(result)

// const result= numbers.find(x => x>5);
// console.log(result)