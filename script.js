
var mins = 0;
var secs = 0;
var milisecs = 0;

// creating variables
var gmins = document.querySelector(".mins");
var gsecs = document.querySelector(".secs");
var gmilisecs = document.querySelector(".milisecs");
var startbtn = document.querySelector("#start");
var stopbtn = document.querySelector("#stop");
var resetbtn = document.querySelector("#reset");
var interval;

startbtn.addEventListener("click", function()
{
    clearInterval(interval);
    interval = setInterval(startTimer,10);
});

stopbtn.addEventListener("click",function(){
    clearInterval(interval);
});

resetbtn.addEventListener("click",function(){
    clearInterval(interval);

    mins="00";
    secs="00";
    milisecs="00";
    gmins.innerHTML = mins;
    gsecs.innerHTML = secs;
    gmilisecs.innerHTML = milisecs;
});


function startTimer()
{
    milisecs++
    if (milisecs <= 9) {
        gmilisecs.innerHTML = '0' + milisecs;
      }
      if (milisecs > 9) {
        gmilisecs.innerHTML = milisecs;
      }
  

      if (milisecs > 99) {
        secs++;
        gsecs.innerHTML = '0' + secs;
        milisecs = 0;
        gmilisecs.innerHTML = '0' + milisecs;
      }
      if(secs>9)
      {
        gsecs.innerHTML=secs;
      }
      if(secs>59)
      {
        secs = 0;
        gsecs.innerHTML ="0"+secs;
        mins++;
        gmins.innerHTML ="0" +mins
        if(mins > 9)
      {
        gmins.innerHTML = mins
      }
}
      }
      
