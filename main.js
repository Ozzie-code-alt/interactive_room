const sec =document.querySelector("[data-second]"); /* if using a class*/ 
const min =document.querySelector("[data-minute]"); /* if using a class*/ 
const hour =document.querySelector("[data-hour]"); /* if using a class*/ 


function setClock(){
const sec =document.querySelector("[data-second]"); 
const currentDate = new Date()
let Seconds = currentDate.getSeconds() / 60

console.log(Seconds)
// const Hour = currentDate.getHours()
// const minutes = currentDate.getMinutes()
setRotation(sec, Seconds)
}


function setRotation(hand, rotation){/* rotation, set properties method */
    hand.style.setProperty('--rotation', rotation )/* accepts two parameters */
}


setInterval(setClock, 1000) /*setting intervals */
setClock()
