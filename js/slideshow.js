var i = 0;
var images = [];
var periodicTime = 3000;

// Image list
images[0] = 'img/1.jpg';
images[1] = 'img/2.jpg';
images[2] = 'img/3.jpg';
images[3] = 'img/4.jpg';
images[4] = 'img/5.jpg';

// Change images periodically. If i is going to exceed the max-index of array, it will set to 0 and slideshow will run again from the begining. 
function changeImage() {
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
    }else {
        i = 0;
    }

    setTimeout("changeImage()", periodicTime);
}

// Executes when user clicked prev button.
function prevImage() {
    i -= 2;
    changeImage();
}

// Executes when user clicked next button.
function nextImage() {
    changeImage();
}

// Loading changeImage() on page load.
window.onload = changeImage();