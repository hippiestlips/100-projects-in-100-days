function rotateImage() {
    var img = document.getElementById('left');
    let degrees = ['0', '180'];
    let chance = degrees[Math.floor(Math.random()*degrees.length)];
    img.style.transform = "rotate(" + chance + "deg)";
    console.log(chance);
}
