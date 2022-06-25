

//querySelector로 지정하기 - CSS같이 사용가능
const h1 = document.querySelector("div.hello:first-child h1");


//click시 설정값으로 바꾸어주는 listener
function handleTitleClick() {
    h1.style.color = "blue";
}
h1.addEventListener("click", handleTitleClick);


//mouseenter: when mouse is entered on const-things that will be changed to settingthings.
function handleMouseEnter() {
    h1.innerText = "mouse is here!"
}
h1.addEventListener("mouseenter", handleMouseEnter);


//mouseleave: mouseenter와 반대
function handleMouseLeave() {
    h1.innerText = "mouse is gone!"
}
h1.addEventListener("mouseleave", handleMouseLeave);


//window-resieze: window 사이즈 변경시 설정값 적용
//window listner는 window로 선언시작
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

//window"copy": window에서 copy시 설정값 적용
function handleWindowCopy () {
    alert("copeir!");
}
window.addEventListener("copy", handleWindowCopy);


//window"offLine": 인터넷 연결 안될시 적용
function handleWindowOffline () {
    alert("SOS NO WIFI!");
}
window.addEventListener("offline", handleWindowOffline);

//window"onLine": 인터넷 될 시 적용
function handleWindowOnline () {
    alert("All Good!");
}
window.addEventListener("online", handleWindowOnline);


