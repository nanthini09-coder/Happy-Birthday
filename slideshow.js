const photos = [

    "Photos/1.jpg",
    "Photos/2.jpg",
    "Photos/3.jpg",
    "Photos/4.jpg",
    "Photos/5.jpg",
    "Photos/6.jpg",
    "Photos/7.jpg",
    "Photos/8.jpg",
    "Photos/9.jpg",
    "Photos/10.jpg"

];

const captions = [

    "Little did this tiny boy know how special he'd become❤️",

    "Growing up, but that adorable smile never changed❤️",

    "The first woman to love you...and the reason you became the wonderful person you are today❤️",

    "Every chapter of your life has its own charm❤️",

    "This was the moment you started looking effortlessly handsome❤️",

    "Just being yourself...and that's more than enough❤️",

    "One little selfie...one of my favourite memories❤️",

    "Life looked good on you then, and it still does❤️",

    "Out of all our photos...this one will always have a special place in my heart❤️",

    "This scrapbook ends here...but I hope our memories never do...Happy Birthday Darisvikram❤️"

];

let current = 0;

function updateSlide(){

    const image = document.getElementById("slideImage");
    const caption = document.getElementById("caption");

    image.style.opacity = "0";
    caption.style.opacity = "0";

    setTimeout(() => {

        image.src = photos[current];

        caption.innerHTML = captions[current];

        document.getElementById("counter").innerHTML =
        `❤️ Memory ${current + 1} of ${photos.length}`;

        image.onload = function(){

            image.style.opacity = "1";
            caption.style.opacity = "1";

        };

    },600);

}

function nextPhoto(){

    if(current < photos.length - 1){

        current++;

        updateSlide();

        const button = document.getElementById("nextButton");

        if(current == photos.length - 1){

            button.innerHTML = "💌 Read My Letter ➜";

        }

        else{

            button.innerHTML = "Next ➜";

        }

    }

    else{

        window.location.href = "letter.html";

    }

}

function previousPhoto(){

    if(current > 0){

        current--;

        updateSlide();

        const button = document.getElementById("nextButton");

        button.innerHTML = "Next ➜";

    }

}

window.addEventListener("load", function(){

    const music = document.getElementById("bgMusic");

    const savedTime = localStorage.getItem("musicTime");

    if(music){

        if(savedTime){

            music.currentTime = parseFloat(savedTime);

        }

        music.play().catch(() => {});

    }

});

window.addEventListener("beforeunload", function(){

    const music = document.getElementById("bgMusic");

    if(music){

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    }

});