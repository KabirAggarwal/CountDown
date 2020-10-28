const days= document.getElementById('days');
const hrs= document.getElementById('hours');
const minutes= document.getElementById('minutes');
const seconds= document.getElementById('seconds');
const updateCountdown= document.getElementById('seconds');
const yearbg=document.getElementById('year');
const ref=document.getElementById('wait_time');



const currYear = new Date().getFullYear();
const finYear = new Date(`January 01 ${currYear + 1} 00:00:00`);
 yearbg.innerText = currYear+1;

function updateValues(){
    const currTime= new Date();
    const change=finYear-currTime;
    
    //Getting the actual values left for the new year
    const days_left = Math.floor(change/1000/60/60/24);
    const hours_left= Math.floor(change/1000/60/60)%24;
    const mins_left= Math.floor(change/1000/60)%60;
    const secs_left= Math.floor(change/1000)%60;
    
    
    //setting the updated values to DOM elements
    days.innerHTML=days_left;
    hrs.innerHTML=hours_left < 10 ? '0'+hours_left:hours_left;
    minutes.innerHTML=mins_left < 10 ? '0'+mins_left:mins_left;
    seconds.innerHTML=secs_left < 10 ? '0'+secs_left:secs_left;
}
setTimeout(() => {
    ref.remove();
    countdown.style.display='flex';
    
}, 1000);
setInterval(() => {
    updateValues();    
}, 1000);


