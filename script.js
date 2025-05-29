window.onload = function() {
    const images = ['./assets/Projects-images/bannerThumb1_1.png', './assets/Projects-images/bannerThumb1_2.png', './assets/Projects-images/bannerThumb1_3.png']; // Array with images
    let currentIndex = 0;

    setInterval(function() {
        document.getElementById('food-image').src = images[currentIndex]; // Change image
        currentIndex = (currentIndex + 1) % images.length;    // Cycle through the images
    }, 2000); // Change image every 2 seconds
};
