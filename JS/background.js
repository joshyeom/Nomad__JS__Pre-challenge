const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //img를 body에 생성

bgImage.src = `img/${chosenImage}`; //img >> string

document.body.appendChild(bgImage); //한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다.
