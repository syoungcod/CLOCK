// variable => 5 ?"yes" : "no";

function startClock(){
    const time = new Date();
    const hour = time.getHours().toString().padStart(2,0);
    const minute = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const offTime = (`${hour}:${minute}:${seconds}`);
    document.getElementById("clock").textContent = offTime;

    const message1 = "Good Morning";
    const message2 = "it's Lunch Time";
    const message3 = "it's Dinner Time";
    const message4 = "GoodNight";
    if(hour == "07"){
        document.getElementById("message").textContent = message1;
    }
    else if(hour == "12"){
        document.getElementById("message").textContent = message2;
    }
    else if(hour == "18"){
        document.getElementById("message").textContent = message3;
    }else if(hour == "21","22","23"){
        document.getElementById("message").textContent = message4;
    }
    else{
        console.log("what time is it?");
    }
}

startClock();
setInterval(startClock,1000);