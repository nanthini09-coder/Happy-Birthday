 // =========================
// Background Music
// =========================

const music = document.getElementById("bgMusic");

const savedTime = localStorage.getItem("musicTime");

if(savedTime){

    music.currentTime = parseFloat(savedTime);

}

music.play().catch(()=>{});

window.addEventListener("beforeunload",function(){

    localStorage.setItem(
        "musicTime",
        music.currentTime
    );

});


// =========================
// Fade In Animation
// =========================

setTimeout(function(){

    document.getElementById("heart").style.opacity = "1";

},500);


setTimeout(function(){

    document.getElementById("title").style.opacity = "1";

},700);


setTimeout(function(){

    document.getElementById("message").style.opacity = "1";

},900);


setTimeout(function(){

    document.getElementById("signature").style.opacity = "1";

},1000);


// =========================
// Heart Shower
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    // Random Position
    heart.style.left = Math.random() * 100 + "vw";

    // Random Size
    heart.style.fontSize = (18 + Math.random() * 22) + "px";

    // Random Speed
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    // Random Drift
    heart.style.transform =
    `translateX(${Math.random()*60-30}px)`;

    document
        .getElementById("heart-container")
        .appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },9000);

}

setInterval(createHeart,300);