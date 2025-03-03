// Stopwatch functionality with milliseconds
const heading=document.querySelector("h1");
const hour=document.querySelectorAll(".hour");
const min=document.querySelectorAll(".minute");
const sec=document.querySelectorAll(".sec");
const box=document.querySelectorAll(".box");
const notein =document.getElementById("add");
const sub=document.querySelector(".intext button");
const notebook=document.querySelector(".notebook");
const count=document.querySelector(".count");
const but=document.querySelectorAll(".but");
const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
const weekday = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
const d = new Date();
heading.textContent=`${d.getDate()}-${month[d.getUTCMonth()]}-${d.getFullYear()} ${weekday[d.getDay()]}`;

setInterval(()=>{
    let date=new Date();
    hour[0].textContent=date.getHours();
    hour[1].textContent=date.getHours();
    min[0].textContent=date.getMinutes();
    min[1].textContent=date.getMinutes(); 
    sec[0].textContent=date.getSeconds();
    sec[1].textContent=date.getSeconds();
    },1000);

let timer;
let milliseconds = 0;
const minute = 1000 * 60;
const hou = minute * 60;
function startStopwatch() {
    clearInterval(timer);
    timer = setInterval(() => {
        milliseconds += 10; // Increase time by 10ms
        let minutes = Math.floor(milliseconds / 60000); // Convert to minutes
        let seconds = Math.floor((milliseconds % 60000) / 1000); // Convert to seconds
        let ms = (milliseconds % 1000) / 10; // Get milliseconds

        // Format to always show two digits (e.g., 01:05:09)
        let formattedTime = 
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds + ":" +
            (ms < 10 ? "0" : "") + ms;

        document.getElementById("stopwatch").textContent = formattedTime;
    }, 10); // Update every 10ms
}

function stopStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    clearInterval(timer);
    milliseconds = 0;
    document.getElementById("stopwatch").textContent = "00:00:00";
}

function getInputVal() {
        notebook.innerHTML+=`<input type="checkbox" class="point"><span>${add.value}</span><hr>`;
        add.value="";
  }