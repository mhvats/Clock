// HOUR DON'T WORKING
// REMOVING HR AFTER CLICKING NOT WORKING
// DON'T ABLE TO DELETE ALL LAPS USING RESET BUTTON
var millisec = 0;
var hr = 0;
var sec = 0;
var min = 0;
var lapCount = 0;
var timer = false;
var milliSecDisplay = document.querySelector("#millisec");
var secDisplay = document.querySelector("#sec");
var minDisplay = document.querySelector("#min");
var hrDisplay = document.querySelector("#hr");
var startTime = document.querySelector("#start");
var stopTime = document.querySelector("#stop");
var resetTime = document.querySelector("#reset");
var mainContainer = document.querySelector(".container");
var clockCotainer = document.querySelector(".clock")
var addLap = document.querySelector("#lap")
var removeLap = document.querySelector("#remove_lap");
var alarmButton = document.querySelector("#alarmbutton");
// alarmButton.innerHTML = "fuc"
var stopwatchButton = document.querySelector("#stopwatchbutton");
alarmButton.addEventListener("click", function(){
    // alert("i got clicked");
    if(mainContainer.style.visibility = "visible"){
        mainContainer.style.visibility ="hidden";
        clockCotainer.style.visibility = "visible";
    }
})
stopwatchButton.addEventListener("click", function(){
    // alert("i got cl");
    if(clockCotainer.style.visibility == "visible"){
        clockCotainer.style.visibility= "hidden";
        mainContainer.style.visibility= "visible";
    }
})
addLap.addEventListener("click", function () {
    // alert("hello");
    var lengthOFLap = document.querySelectorAll(".sample").length;
    // if(lengthOFLap === 0){
    //     var hr = document.createElement("hr");
    //     hr.classList.add("hrclass");
    //     mainContainer.append(hr);
    //     // alert("hello");
    // }
    var div = document.createElement("div");
    var spanSno = document.createElement("span");
    var spanTime = document.createElement("span");
    mainContainer.append(div);
    div.classList.add("sample");
    div.append(spanSno);
    div.append(spanTime);
    spanSno.classList.add("spanclass");
    spanTime.classList.add("timeclass");

    if (lengthOFLap >= 5) {
        alert("You have reached Maximum number of Lap count!")
    }
    else {
        lapCount++;
        spanSno.innerHTML = lapCount;
        spanTime.innerHTML = hr + ":" + min + ":" + sec + "." + millisec;
    }
})
removeLap.addEventListener("click", function () {
    var delteLaps = document.querySelector(".sample");
    delteLaps.remove(".sample");
    lapCount = 0;
})
startTime.addEventListener("click", function () {
    timer = true;
    stopWatch();
})
stopTime.addEventListener("click", function () {
    timer = false;
})
resetTime.addEventListener("click", function () {
    timer = false;
    milliSecDisplay.innerHTML = "00";
    secDisplay.innerHTML = "00";
    minDisplay.innerHTML = "00";
})

function stopWatch() {
    if (timer === true) {
        millisec++;
        milliSecDisplay.innerHTML = millisec;
        setTimeout("stopWatch()", 10);
        if (millisec === 100) {
            sec++;
            millisec = 0;
        }
        secDisplay.innerHTML = sec;
        if (sec == 60) {
            sec = 0;
            min++;
        }
        minDisplay.innerHTML = min;
        // if (min == 60) {
        //     min = 0;
        //     hr++;
        // }
        // hrDisplay.innerHTML = hr;
        if (millisec < 10) {
            milliSecDisplay.innerHTML = "0" + millisec;
        }
        if (sec < 10) {
            secDisplay.innerHTML = "0" + sec;
        }
        if (min < 10) {
            minDisplay.innerHTML = "0" + min;
        }
    }
}