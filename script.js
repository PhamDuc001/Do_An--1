const fanClose = document.querySelector(".fan_icon-close")
const fanOpen = document.querySelector(".fan_icon-open")
const lightClose = document.querySelector(".light_icon-close")
const lightOpen = document.querySelector(".light_icon-open")
const tempElement = document.querySelector(".temp-data")
const humidElement = document.querySelector(".humid-data")
const btnFan = document.querySelector(".btnn-fan")
const btnLight = document.querySelector(".btn-light")

const todayElement = document.querySelector(".today")
const dateElement = document.querySelector(".date-data")
const timeElement = document.querySelector(".time-data")
var checkFan = false;
var checkLight = false;

var temp
var humid

//------------------------------------------------------
// Initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyB0A_xZEG6bZIAMJYnsllxeP_Z8Aix-Pyc",
    authDomain: "esp-8266-2d864.firebaseapp.com",
    databaseURL: "https://esp-8266-2d864-default-rtdb.firebaseio.com",
    projectId: "esp-8266-2d864",
    storageBucket: "esp-8266-2d864.appspot.com",
    messagingSenderId: "1094755435358",
    appId: "1:1094755435358:web:fbd33d91956d7cd79ac5cf",
    measurementId: "G-C1CN2L7PK2",
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

database.ref("/Temp_Current").on("value", function (snapshot) {
    temp = snapshot.val();
    tempElement.innerHTML = `${temp}℃`;

});

database.ref("/Humid_Current").on("value", function (snapshot) {
    humid = snapshot.val();
    humidElement.innerHTML = `${humid}%`;

});

database.ref("/FAN_STATUS").on("value", function (snapshot) {
    var fan = snapshot.val();
    // console.log(fan);
    if (fan == 1) {
        fanClose.classList.add("remove");
        fanOpen.classList.remove("remove");
        btnFan.innerHTML = "Turn off";
    }
    if (fan == 0) {
        fanOpen.classList.add("remove");
        fanClose.classList.remove("remove");
        btnFan.innerHTML = "Turn on";
    }
});

database.ref("/LIGHT_STATUS").on("value", function (snapshot) {
    var light = snapshot.val();
    if (light == 1) {
        lightClose.classList.add("remove");
        lightOpen.classList.remove("remove");
        document.querySelector(".btn-light").innerHTML = "Turn off";

    }
    if (light == 0) {
        lightOpen.classList.add("remove");
        lightClose.classList.remove("remove");
        document.querySelector(".btn-light").innerHTML = "Turn on";

    }
});

const handleFan = () => {
    checkFan = !checkFan;
    if (checkFan) {
        fanClose.classList.add("remove");
        fanOpen.classList.remove("remove");
        database.ref("/").update({
            FAN_STATUS: 1,
        });
        //btnFan.innerHTML = "Turn off";
        btnFan.innerHTML = "Turn off";
    } else {
        fanOpen.classList.add("remove");
        fanClose.classList.remove("remove");
        database.ref("/").update({
            FAN_STATUS: 0,
        });
        //btnFan.innerHTML = "Turn on";
        btnFan.innerHTML = "Turn on";
    }
};
const handleLight = () => {
    checkLight = !checkLight;
    if (checkLight) {
        lightClose.classList.add("remove");
        lightOpen.classList.remove("remove");
        database.ref("/").update({
            LIGHT_STATUS: 1,
        });
        document.querySelector(".btn-light").innerHTML = "Turn off";
    } else {
        lightOpen.classList.add("remove");
        lightClose.classList.remove("remove");
        database.ref("/").update({
            LIGHT_STATUS: 0,
        });
        document.querySelector(".btn-light").innerHTML = "Turn on";
    }
}

//************8 Device************ */
var ledElement = document.querySelectorAll(".btmm")
var checkLed1
var checkLed2
var checkLed3
var checkLed4
var checkLed5
var checkLed6
var checkLed7
var checkLed8

//*******************************Led1***************************************** */
database.ref("/Device/D1").on("value", function (snapshot) {
    var D1 = snapshot.val();
    //console.log(fan);
    if (D1 == 1) {
        ledElement[0].classList.add("active-led");

    }
    if (D1 == 0) {
        ledElement[0].classList.remove("active-led");

    }
})
const handleLed1 = () => {
    checkLed1 = !checkLed1;
    if (checkLed1) {
        ledElement[0].classList.add("active-led");
        database.ref("/Device").update({
            D1: 1,
        });

    } else {
        ledElement[0].classList.remove("active-led");
        database.ref("/Device").update({
            D1: 0,
        });

    }
}




//*******************************Led2***************************************** */
database.ref("/Device/D2").on("value", function (snapshot) {
    var D2 = snapshot.val();
    //console.log(fan);
    if (D2 == 1) {
        ledElement[1].classList.add("active-led");

    }
    if (D2 == 0) {
        ledElement[1].classList.remove("active-led");

    }
});
const handleLed2 = () => {
    checkLed2 = !checkLed2;
    if (checkLed2) {
        ledElement[1].classList.add("active-led");
        database.ref("/Device").update({
            D2: 1,
        });

    } else {
        ledElement[1].classList.remove("active-led");
        database.ref("/Device").update({
            D2: 0,
        });

    }
}

//*******************************Led3***************************************** */
database.ref("/Device/D3").on("value", function (snapshot) {
    var D3 = snapshot.val();
    //console.log(fan);
    if (D3 == 1) {
        ledElement[2].classList.add("active-led");


        if (D3 == 0) {
            ledElement[2].classList.remove("active-led");

        }
    }
})
const handleLed3 = () => {
    checkLed3 = !checkLed3;
    if (checkLed3) {
        ledElement[2].classList.add("active-led");
        database.ref("/Device").update({
            D3: 1,
        });

    } else {
        ledElement[2].classList.remove("active-led");
        database.ref("/Device").update({
            D3: 0,
        });

    }
}

//*******************************Led4***************************************** */
database.ref("/Device/D4").on("value", function (snapshot) {
    var D4 = snapshot.val();
    //console.log(fan);
    if (D4 == 1) {
        ledElement[3].classList.add("active-led");


        if (D4 == 0) {
            ledElement[3].classList.remove("active-led");

        }
    }
})
const handleLed4 = () => {
    checkLed4 = !checkLed4;
    if (checkLed4) {
        ledElement[3].classList.add("active-led");
        database.ref("/Device").update({
            D4: 1,
        });

    } else {
        ledElement[3].classList.remove("active-led");
        database.ref("/Device").update({
            D4: 0,
        });

    }
}

//*******************************Led5***************************************** */
database.ref("/Device/D5").on("value", function (snapshot) {
    var D5 = snapshot.val();
    //console.log(fan);
    if (D5 == 1) {
        ledElement[4].classList.add("active-led");


        if (D5 == 0) {
            ledElement[4].classList.remove("active-led");

        }
    }
})
const handleLed5 = () => {
    checkLed5 = !checkLed5;
    if (checkLed5) {
        ledElement[4].classList.add("active-led");
        database.ref("/Device").update({
            D5: 1,
        });

    } else {
        ledElement[4].classList.remove("active-led");
        database.ref("/Device").update({
            D5: 0,
        });

    }
}

//*******************************Led6***************************************** */
database.ref("/Device/D6").on("value", function (snapshot) {
    var D6 = snapshot.val();
    //console.log(fan);
    if (D6 == 1) {
        ledElement[5].classList.add("active-led");


        if (D6 == 0) {
            ledElement[5].classList.remove("active-led");

        }
    }
})
const handleLed6 = () => {
    checkLed6 = !checkLed6;
    if (checkLed6) {
        ledElement[5].classList.add("active-led");
        database.ref("/Device").update({
            D6: 1,
        });

    } else {
        ledElement[5].classList.remove("active-led");
        database.ref("/Device").update({
            D6: 0,
        });

    }
}

//*******************************Led7***************************************** */
database.ref("/Device/D7").on("value", function (snapshot) {
    var D7 = snapshot.val();
    //console.log(fan);
    if (D7 == 1) {
        ledElement[6].classList.add("active-led");


        if (D7 == 0) {
            ledElement[6].classList.remove("active-led");

        }
    }
})
const handleLed7 = () => {
    checkLed7 = !checkLed7;
    if (checkLed7) {
        ledElement[6].classList.add("active-led");
        database.ref("/Device").update({
            D7: 1,
        });

    } else {
        ledElement[6].classList.remove("active-led");
        database.ref("/Device").update({
            D7: 0,
        });

    }
}

//*******************************Led8***************************************** */
database.ref("/Device/D8").on("value", function (snapshot) {
    var D8 = snapshot.val();
    //console.log(fan);
    if (D8 == 1) {
        ledElement[7].classList.add("active-led");


        if (D8 == 0) {
            ledElement[7].classList.remove("active-led");

        }
    }
})
const handleLed8 = () => {
    checkLed8 = !checkLed8;
    if (checkLed8) {
        ledElement[7].classList.add("active-led");
        database.ref("/Device").update({
            D8: 1,
        });

    } else {
        ledElement[7].classList.remove("active-led");
        database.ref("/Device").update({
            D8: 0,
        });

    }
}

/*************Toggle Mode*********** */
var toggleBtn = document.querySelector(".toggle");
let getMode = localStorage.getItem("mode");
var modeCheck = 0

database.ref("/Mode").on("value", function (snapshot) {
    var mode = snapshot.val();
    if (mode == 0) {
        btnFan.classList.add("disable")
        btnLight.classList.add("disable")
        toggleBtn.classList.add("active")
    }
    if (mode == 1) {
        btnFan.classList.remove("disable")
        btnLight.classList.remove("disable")
        toggleBtn.classList.remove("active")
    }
});

toggleBtn.addEventListener("click", (e) => {
    modeCheck = !modeCheck
    toggleBtn.classList.toggle("active")
    localStorage.setItem("mode", modeCheck);
    getMode = localStorage.getItem("mode");
    if (getMode == "false") {
        btnFan.classList.add("disable")
        btnLight.classList.add("disable")
        database.ref("/").update({
            Mode: 0,
        });
    } else if (getMode == "true") {
        btnFan.classList.remove("disable")
        btnLight.classList.remove("disable")
        database.ref("/").update({
            Mode: 1,
        });
    }
});



/*************Date************ */
var dateSetting = () => {
}
dateSetting()
var today = new Date()
var fulldate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var day = today.getDay()
var fullTime = today.getHours() + ':' + today.getMinutes()


todayElement.innerHTML = fulldate   
var dayEnglish = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

for (var i = 2; i < 9; i++) {
    if (i == day) {
        day = dayEnglish[i - 2]
    }
}
day = day==1 ? "Monday": day
console.log(day);
dateElement.innerHTML = day  
if (today.getMinutes() > 10) {
    if (today.getHours() < 13) {
        timeElement.innerHTML = `${today.getHours() + ':' + today.getMinutes()}AM`
    }
    if (today.getHours() > 12) {
        var h = today.getHours() - 12
        timeElement.innerHTML = `${h + ':' + today.getMinutes()} PM`
    }
} else if (today.getMinutes() < 10) {
    if (today.getHours() < 13) {
        timeElement.innerHTML = `${today.getHours() + ':' + '0' + today.getMinutes()}AM`
    }
    if (today.getHours() > 12) {
        var h = today.getHours() - 12
        timeElement.innerHTML = `${h + ':' + '0' + today.getMinutes()} PM`
    }
}
setInterval(
    function() {       
        todayElement.innerHTML = fulldate   
        for (var i = 2; i < 9; i++) {
            if (i == day) {
                day = dayEnglish[i - 2]
            }
        }
        dateElement.innerHTML = day  
        if (today.getMinutes() > 10) {
            if (today.getHours() < 13) {
                timeElement.innerHTML = `${today.getHours() + ':' + today.getMinutes()}AM`
            }
            if (today.getHours() > 12) {
                var h = today.getHours() - 12
                timeElement.innerHTML = `${h + ':' + today.getMinutes()} PM`
            }
        } else if (today.getMinutes() < 10) {
            if (today.getHours() < 13) {
                timeElement.innerHTML = `${today.getHours() + ':' + '0' + today.getMinutes()}AM`
            }
            if (today.getHours() > 12) {
                var h = today.getHours() - 12
                timeElement.innerHTML = `${h + ':' + '0' + today.getMinutes()} PM`
            }
        }
        console.log(60);
    }
    , 60000)
//****************** * Set Temperature *********************//
var formElement = document.querySelector(".formSetTemp")
var low = document.querySelector(".low")
var high = document.querySelector(".high")
var formSubmit = function (event) {
    // event.preventDefault();
    database.ref("/").update({
        Low: Number(low.value),
    });
    database.ref("/").update({
        High: Number(high.value),
    });
}
database.ref("/Low").on("value", function (snapshot) {
    var lowData = snapshot.val();
    low.value = lowData;
});
database.ref("/High").on("value", function (snapshot) {
    var highData = snapshot.val();
    high.value = highData;
});






























