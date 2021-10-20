
let clock=setInterval(clocktimimg,1000)
function clocktimimg(){
let date=new Date();
let time=date.toLocaleTimeString();
document.getElementById('showtime').innerHTML=time;
}
clocktimimg();