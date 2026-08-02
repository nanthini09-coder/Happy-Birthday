const birthDate = new Date("2002-08-09");

const today = new Date();

const difference = today - birthDate;

const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);

document.getElementById("daysCount").innerHTML =
`You've been making the world brighter for <br><br>${days} Days❤️`;



function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top = "-50px";

    sparkle.style.fontSize =
        (15 + Math.random() * 15) + "px";

    sparkle.style.opacity = "0.8";

    sparkle.style.zIndex = "9999";

    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);

    let pos = -50;

    let drift = Math.random() * 2 - 1;

    const fall = setInterval(() => {

        pos += 2;

        sparkle.style.top = pos + "px";

        sparkle.style.left =
            parseFloat(sparkle.style.left) + drift + "px";

        if (pos > window.innerHeight) {

            clearInterval(fall);

            sparkle.remove();

        }

    }, 20);
}

setInterval(createSparkle, 250);



window.addEventListener("pageshow", function(){

    const music =
    document.getElementById("bgMusic");

    if(music){

        const savedTime =
        localStorage.getItem("musicTime");

        if(savedTime){

            music.currentTime =
            parseFloat(savedTime);

        }

        music.play().catch(() => {});

    }

});

window.addEventListener("beforeunload", function(){

    const music =
    document.getElementById("bgMusic");

    if(music){

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    }

});