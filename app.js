///console.log(); >> 변수창출, 출력
console.log(5 + 2); //=7

//veriable 생성
const a = 5;
const b = 2;
console.log(a + b); //=7

//Other veriable
let c = 5;
var d = 2;
//always const      재선언,재할당 금지
//sometimes let     재선언 금지, 재할당 가능
//never var         재선언 가능, 재할당 가능

let a = 5; // 위 const로 인해 불가능
let c = 8; // 위 let 먼저 선언으로 인해 불가능
c = 7; // let이기 때문에 재할당 가능.
var d = 3; //var은 재선언 가능
d = 6; //var은 재할당 가능

//camelCase
const veryVeryVeryLongName = 7;
console.log(veryVeryVeryLongName); //=7
