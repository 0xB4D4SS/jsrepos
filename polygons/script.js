window.onload = function () {
    const canvas = document.getElementById("canvas");
    const data = document.getElementById("data");
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext("2d");
    let isFirstDot = true;
    let centerX = 640;
    let centerY = 360;
    let firstX = 0;
    let firstY = 0;
    let lastX = 0;
    let lastY = 0;

    function drawCoords() {
        ctx.strokeStyle = "black";
        ctx.font = "10px sans-serif";
        ctx.beginPath();
        ctx.moveTo(0, 360);
        for (let i=0; i<=canvas.width; i+=20) {
            ctx.lineTo(i, 360);
            ctx.fillText(i-centerX, i, 355);
        }
        ctx.moveTo(640, 0);
        for (let i=0; i<=canvas.height; i+=20) {
            ctx.lineTo(640, i);
            ctx.fillText(centerY-i, 645, i);
        }
        ctx.stroke();
    }

    function drawText() {
        ctx.fillStyle = "black";
        ctx.font = "20px sans-serif";
        ctx.fillText("Press \"Escape\" to end polygon", 50, 50);
    }

    function drawPolygon(event) {
        event = event || document.event;
        ctx.strokeStyle = "red";
        if (isFirstDot) {
            isFirstDot = false;
            ctx.beginPath();
            ctx.moveTo(event.pageX, event.pageY);
            ctx.lineTo(event.pageX, event.pageY);
            firstX = event.pageX;
            firstY = event.pageY;
            lastX = event.pageX;
            lastY = event.pageY;
        }
        else {
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(event.pageX, event.pageY);
            lastX = event.pageX;
            lastY = event.pageY;
            ctx.stroke();
        }
        data.innerText = data.innerText + "(" + (lastX-centerX) + ", " + (centerY-lastY) + "); ";
    }

    document.addEventListener("keyup", function(event) {
       if (event.code === "Escape") {
           ctx.lineTo(firstX, firstY);
           ctx.stroke();
       }
    });

    document.getElementById("restart").addEventListener("click", function() {
        ctx.fillStyle = "white";
        ctx.fillRect(0,0,1280, 720);
        drawText();
        drawCoords();
        firstX = 0;
        firstY = 0;
        lastX = 0;
        lastY = 0;
        isFirstDot = true;
        data.innerText = "";
    });

    document.getElementById("canvas").addEventListener("click", drawPolygon);

    drawText();
    drawCoords();
}