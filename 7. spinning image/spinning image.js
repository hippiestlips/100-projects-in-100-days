var deg = 1;
var rotDiff = 1;
var image;
function setImage(event) {
    console.log(event);
    image = event.target.files[0];
}


function imageSpinning() {
    var imagehtml = document.getElementById('img');
    imagehtml.src = URL.createObjectURL(image);
    imagehtml.style.transform = 'rotate(' + deg + 'deg)';
    setTimeout("imageSpinning()", 10);
    deg = deg + rotDiff;
}

