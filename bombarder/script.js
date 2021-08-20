window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const bombarder = new Image();
    const bomb = new Image();
    const target = new Image();
    bombarder.src = 'bombarder.png';
    bomb.src = 'bomb.png'
    target.src = 'target.png'
    canvas.width = 1280;
    canvas.height = 720;
    let currBombPos = 200;
    let bombIsDropped = false;
    let bombEndX = 0;
    let currPlanePos = 0;
    let lastPlanePos = 0;
    let targetExists = 0;
    let targetPos = 0;
    let score = 0;
    let startTime = new Date();
    // функция очистки канваса
    function clearAll() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    // рисуем самолет на месте мышки
    function drawPlane(event) {
        event = event || window.event;
        ctx.clearRect(0, 50, canvas.width, 200);
        ctx.drawImage(bombarder, event.pageX-225, 50, 300, 200);
        currPlanePos = event.pageX - 225;
    }
    // рисуем бомбу
    function drawBomb() {
        bombEndX = lastPlanePos;
        if (currBombPos < 650) {
            ctx.clearRect(lastPlanePos, currBombPos-5, 50, 50);
            ctx.drawImage(bomb, lastPlanePos, currBombPos, 50, 50);
            currBombPos += 5;
            setTimeout(drawBomb, 17);
        } else {
            checkHit(bombEndX);
            bombIsDropped = false;
            currBombPos = 200;
        }
    }
    // рисцем цель
    function drawTarget() {
        if (!targetExists) {
            targetPos = Math.floor(Math.random()*1000);
            ctx.drawImage(target, targetPos, 650, 100, 100);
            targetExists = 1;
        }
        else {
            ctx.drawImage(target, targetPos, 650, 100, 100);
        }
    }
    // рисуем финальный экран
    function drawEndscreen() {
        document.onmousemove = null;
        canvas.removeEventListener("click", dropBomb);
        clearAll();
        clearInterval(inter1);
        clearInterval(inter2);
        clearInterval(inter3);
        ctx.font = "14px Verdana"
        ctx.fillText("Victory!", 600, 400);
        ctx.fillText("Your score: "+score, 600, 500);
    }
    // таймер
    function countTime(){
        var elapsed = parseInt((new Date() - startTime) / 1000);
        if (elapsed < 60) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.font = "14px Verdana"
            // draw the running time at half opacity
            ctx.clearRect(100, 0, 600, 100);
            ctx.fillText("Time: "+elapsed+" secs", 150, 50);
            ctx.restore();
        }
        else {
            drawEndscreen();
        }
    }
    // рисуем счет
    function drawScore() {
        ctx.fillStyle = "white";
        ctx.fillRect(50, 50, 20, 20);
        ctx.fillStyle = "black";
        ctx.clearRect(50, 0, 100, 100);
        ctx.fillText("Score: "+score, 50, 50);
    }
    // проверяем попадание бомбы
    function checkHit(bombX) {
        if (bombX >= targetPos
            && bombX + 50 <= targetPos + 100) {
            ctx.clearRect(0, 640, 1200, 100);
            targetExists = 0;
            score += 1;
        }
    }
    // сбрасываем бомбу
    function dropBomb() {
        if (!bombIsDropped) {
            bombIsDropped = true;
            lastPlanePos = currPlanePos;
            drawBomb();
        }
    }
    // инициализируем таймеры и события
    document.onmousemove = drawPlane;
    canvas.addEventListener("click", dropBomb);
    let inter1 = setInterval(drawTarget, 1000);
    let inter2 = setInterval(drawScore, 1000);
    let inter3 = setInterval(countTime, 1000);
}