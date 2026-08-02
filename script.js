localStorage.removeItem("musicTime");

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "❤️";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-50px";

    petal.style.fontSize =
        (20 + Math.random() * 20) + "px";

    petal.style.zIndex = "999";

    document.body.appendChild(petal);

    let pos = -50;
    let drift = Math.random() * 2 - 1;

    const fall = setInterval(() => {

        pos += 2;

        petal.style.top = pos + "px";

        petal.style.left =
            parseFloat(petal.style.left) + drift + "px";

        if (pos > window.innerHeight) {
            clearInterval(fall);
            petal.remove();
        }

    }, 20);
}

setInterval(createPetal, 250);

function openModal(){

    document.getElementById(
        "passwordModal"
    ).style.display = "flex";

}

function checkPassword(){

    const pass =
        document.getElementById("passwordInput").value;

    const message =
        document.getElementById("errorMessage");

    if(pass === "0908"){

        message.style.color = "#7CFC00";

        message.innerText =
        "✅ Access Granted ❤️";

        document.body.style.opacity = "0";

setTimeout(() => {

    window.location.href = "intro.html";

},1500);

        

    }

    else{

        message.style.color = "#ff4d6d";

        message.innerText =
        "❌ Wrong password. Try again ❤️";

    }

}

