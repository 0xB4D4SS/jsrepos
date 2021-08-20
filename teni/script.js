function setShadow(event) {
    let shadowX;
    let shadowY;
    let shadowLimit = 10;
    event = event || window.event;
    const text = document.getElementById("text");
    shadowX = (745 - event.pageX) / 10;
    shadowY = (290 - event.pageY) / 10;

    shadowX = shadowX > shadowLimit ? shadowLimit : shadowX;
    shadowX = shadowX < shadowLimit * -1 ? shadowLimit * -1 : shadowX;
    shadowY = shadowY > shadowLimit ? shadowLimit : shadowY;
    shadowY = shadowY < shadowLimit * -1 ? shadowLimit * -1 : shadowY;

    text.style.textShadow = `${Math.ceil(shadowX)}px ${Math.ceil(shadowY)}px #000eff`;

}

window.onload = function () {
    document.onmousemove = setShadow;
}