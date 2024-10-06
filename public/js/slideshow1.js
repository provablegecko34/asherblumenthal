
let currentIndex = 0;
let slideshowInterval;

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Shuffle the images
shuffleArray(imageUrls);

// Show image function
function showImage(index) {
    const imgElement = document.getElementById('slideshow-image');
    if (imgElement) {
        imgElement.src = imageUrls[index]; // Update the source directly
