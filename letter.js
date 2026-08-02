const music =
document.getElementById("bgMusic");

const savedTime =
localStorage.getItem("musicTime");

if(savedTime){

    music.currentTime =
    parseFloat(savedTime);

}

music.play().catch(()=>{});

window.addEventListener("beforeunload",function(){

    localStorage.setItem(
        "musicTime",
        music.currentTime
    );

});



const message =
`Ennanga❤️,

Happiest Birthday Kutty💕

May God Always Bless You, En Chellam❤️

Thank you for being in my life nga❤️ Ippe irukure pole eppothume santhoshamagevo aarokiyemaagevo irukeno neenga❤️

Every year birthday kku semester break vanthurthu, but kandipa soon unge birthday nambe sernthu celebrate pannelam nga❤️

I hope this year birthday and ithuku angetu vare ovvoru birthday vum ungeluku best eh kodukeno❤️

Neenga inno life le nereye heights reach panneno and nereye achieve panneno nnu naa aasepadure nga❤️

Last but not least, I LOVE YOU THE MOST AND WILL ALWAYS LOVE YOU MY BABY❤️💋

Once again...

Happy Birthday nga❤️😘`;



let index = 0;

const speed = 45;

function typeLetter(){

    if(index < message.length){

        document.getElementById("letter").innerHTML +=
        message.charAt(index);

        index++;

        setTimeout(typeLetter, speed);

    }

    else{

        document.getElementById("signature").style.opacity = "1";

setTimeout(function(){

    document.getElementById("nextSection").style.opacity = "1";

},800);

    }

}

window.onload = function(){

    typeLetter();

};