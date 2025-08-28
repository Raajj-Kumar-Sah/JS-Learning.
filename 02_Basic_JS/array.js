//Array...
const myarr=[0,1,2,3,4,5,6,7,8,9];
// console.log(myarr);
// console.log(myarr.length);
// console.log(myarr[0]);
// console.log(myarr[1]);
// console.log(myarr[2]);
// const newarr=new Array(1,2,3,4);
// console.log(newarr);
// console.log(newarr[1]);

//Array methods
// console.log(myarr.push(10));//Add element from the end
// console.log(myarr);
// console.log(myarr.pop());//Remove element from the end
// console.log(myarr);
// console.log(myarr.shift());//Remove element from the beginning
// console.log(myarr);
// console.log(myarr.unshift(0));//Add element from the beginning
// console.log(myarr);
// console.log(myarr.includes(5));//Check if array includes 5
// console.log(myarr.indexOf(58));//Find index of 58

// console.log(myarr.reverse());//Reverse the array
// console.log(myarr);
// const newarr=myarr.join(", ");//Join array elements into a string
// console.log(newarr); 


//Slice VS Splice........
// console.log(myarr.slice(1, 3));//Extract a section of the array
// console.log(myarr);
// console.log(myarr.splice(1, 2));//Remove elements from the array
// console.log(myarr);

// slice, splice

console.log("A ", myarr);

const myn1 = myarr.slice(1, 3)

console.log(myn1);
console.log("B ", myarr);


const myn2 = myarr.splice(1, 3)
console.log("C ", myarr);
console.log(myn2);
