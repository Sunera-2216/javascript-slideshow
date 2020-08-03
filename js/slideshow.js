var i = 0;
var images = [];
var periodicTime = 3000; // 3sec
var id; // Store the id of the timer in changeImage().

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

    id = setTimeout("changeImage()", periodicTime); // setTimeout() returns the id value that can be used to cancel the timer.
}

// Executes when user clicked prev button.
function prevImage() {
    i -= 2;
    
    if (i < 0){
        i = 0;
    }

    clearTimeout(id); // cancel existing timer.
    changeImage();
}

// Executes when user clicked next button.
function nextImage() {
    clearTimeout(id); // cancel existing timer.
    changeImage();
}

// Loading changeImage() on page load.
window.onload = changeImage();