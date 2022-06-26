const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek); //montuewedthufrisatsun
//이렇게 정의하면 매우 귀찮을 뿐더러 원하는 요소를 끄집어내지 못함

const daysOfWeekArrays = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfWeekArrays);
//(7) ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
//[]안에 ,로 분리

// Get Item from Array
console.log(daysOfWeekArrays[4]);
//fri
//모든 순서는 0부터시작 그러므로 4는 5번째 fri

// Add one more day to the array
daysOfWeekArrays.push("sunsun");
// (8) ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'sunsun']
