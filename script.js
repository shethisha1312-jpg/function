// function myfuction(){
//   console.log("ish sheth");
//     console.log("charmy  ");
// }
// myfuction();

// function myfuction(msg){
//     //parameter -> input
//     console.log(msg);
// } 

// myfuction("html css js",100);//argument

//function -> 2 number , sum

// function sum(x,y){
//     s=x+y;     
//     return s;
// }

// let  val = sum(3,4);
// console.log(val);
 
//sum fuction
// function sum(a,b){
//     return a+b;
// }
// const arrowsum = (a,b)=>{
//     console.log(a+b);
// };

// //multiplication function
// function mul(a,b){
//     return a*b;

// }
// const arrowmul = (a,b)=>{
//     console.log(a*b);
// };

// function countVowels(str){
//     let count = 0;
//     for (const char of str){
//         if(char ==="a"||char ==="e"||char ==="i"||char ==="o"||char ==="u")
//             count++;

//     }
//     return count;
// }
// const  countVow =(str)=>{
//     let count = 0;
//     for (const char of str){
//         if(char ==="a"||char ==="e"||char ==="i"||char ==="o"||char ==="u")
//         {   count++;
//         } 
//     }
//     return count;

// };

//foreach loop in array
// let arr=["rajkot","mumbai","pune","barpda"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });


 //Q-1

//  let nums=[2,3,4,5,6];

//  nums.map((val)=>{
//     console.log(val);
//  });

//  nums.forEach((num) =>{
//     console.log(num*num);
//  });
 
//  let arr=[1,2,3,4,5,6,7];
//  let evenArr=arr.filter((val)=>{
//     return val>3    ;

//  });

//  console.log(evenArr);

// const array1=[1,2,3,4];
// //0+1+2+3+4
// const initialValue=0;
// const sumWidthInitial = array1.reduce(
//     (accumulator,currentValue)=> accumulator+currentValue,initialValue,   
// );
// console.log(sumWidthInitial);


// let arr=[1,2,3,4];
// const output=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(output);//10

// let arr=[5,4,3,2,1];

// const output=arr.reduce((prev,cuur)=>{
//     return prev>    cuur ? prev:cuur;
// });

// console.log(output);//10

//Q-1

// let marks=[99,96,72,92,98,76];

// let toppers=marks.filter((val)=>{
//     return val>90;
// });

// console.log(toppers);

//q-1\

let n=prompt("enter a number");
let arr=[];

for(let i=1; i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum =arr.reduce((res,curr)=>{
    return res+curr;
})

console.log("sum =",sum);

 
let factorial =arr.reduce((res,curr)=>{
    return res*curr;
})
console.log("factorial=",factorial);