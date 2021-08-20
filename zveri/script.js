const tsaplya = new Image();
const gipopotam = new Image();
const nosorog = new Image();
const slon = new Image();
const zherebenok = new Image();
const korova = new Image();
const lev = new Image();
const obezyana = new Image();
tsaplya.src = "img/tsaplya.png";
gipopotam.src = "img/gipopotam.png";
nosorog.src = "img/nosorog.png";
slon.src = "img/slon.png";
zherebenok.src = "img/zherebenok.png";
korova.src = "img/korova.png";
lev.src = "img/lev.png";
obezyana.src = "img/obezyana.png";

let nextAnimal = "zherebenok";
let currAnimal = "zherebenok";

function drawAnimals(ctx) {
    const text1 = "Загадай одно из изображенных животных и называй его по буквам, нажимая кнопку клавиатуры на каждую букву";
    const text2 = "Для остановки нажмите Escape";
    ctx.font = "20px sans-serif";
    ctx.fillStyle = "black";
    ctx.fillText(text1, 50, 50);
    ctx.fillText(text2, 50, 100);
    ctx.font = "14px sans-serif";
    ctx.fillText("Цапля", 375, 100);
    ctx.fillText("Гиппопотам", 650, 80);
    ctx.fillText("Носорог", 960, 220);
    ctx.fillText("Слон", 960, 410);
    ctx.fillText("Жеребенок", 700, 480);
    ctx.fillText("Корова", 470, 480);
    ctx.fillText("Лев", 250, 460);
    ctx.fillText("Обезьяна", 200, 200);
    ctx.drawImage(tsaplya, 350, 120, 150, 150);
    ctx.drawImage(gipopotam, 630, 100, 200, 150);
    ctx.drawImage(nosorog, 880, 200, 200, 200);
    ctx.drawImage(slon, 900, 430, 200, 150);
    ctx.drawImage(zherebenok, 680, 500, 150, 200);
    ctx.drawImage(korova, 380, 500, 200, 200);
    ctx.drawImage(lev, 150, 480, 200, 200);
    ctx.drawImage(obezyana, 160, 220, 150, 200);
}

function drawFill(ctx) {
    ctx.fillStyle = "red";
    switch (nextAnimal) {
        case "zherebenok":
            currAnimal = nextAnimal;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(680, 500, 150, 200);
            drawAnimals(ctx);
            nextAnimal = "gipopotam";
            break;
        case "gipopotam":
            currAnimal = nextAnimal;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(630, 100, 200, 150);
            drawAnimals(ctx);
            nextAnimal = "lev";
            break;
        case "lev":
            currAnimal = nextAnimal;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(150, 480, 200, 200);
            drawAnimals(ctx);
            nextAnimal = "slon";
            break;
        case "slon":
            currAnimal = nextAnimal;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(900, 430, 200, 150);
            drawAnimals(ctx);
            nextAnimal = "tsaplya";
            break;
        case "tsaplya":
            currAnimal = nextAnimal;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(350, 120, 150, 150);
            drawAnimals(ctx);
            nextAnimal = "korova";
            break;
        case "korova":
            currAnimal = nextAnimal;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(380, 500, 200, 200);
            drawAnimals(ctx);
            nextAnimal = "nosorog";
            break;
        case "nosorog":
            currAnimal = nextAnimal;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(880, 200, 200, 200);
            drawAnimals(ctx);
            nextAnimal = "obezyana";
            break;
        case "obezyana":
            currAnimal = nextAnimal;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(160, 220, 150, 200);
            drawAnimals(ctx);
            nextAnimal = "zherebenok";
            break;
    }
    return true;
}

window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 1280;
    canvas.height = 720;

    drawAnimals(ctx);

    document.addEventListener('keydown', function(event) {
        if (event.code === "Escape") {
            alert("Вы загадали:" + currAnimal);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAnimals(ctx);
            nextAnimal = "zherebenok";
            currAnimal = nextAnimal;
        }
        else {
            document.onkeyup = drawFill(ctx);
        }
    });
    document.addEventListener('click', function () {
        drawFill(ctx);
    });
}