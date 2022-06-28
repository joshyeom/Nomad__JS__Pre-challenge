//objects
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
//선언 = {property: value,}

console.log(player);
//fat:true
player.fat = false;
console.log(player);
//fat:false
//object 안에 내용을 수정한 것이기 때문에 const에 영향을 받지 아니함.
player = false;
//이 경우가 에러
player.lastName = "potato"; //push!
console.log(player);
//{name: 'nico', points: 10, fat: false, lastName: 'potato'}
player.points = player.points + 15;
console.log(player.points);
//25
