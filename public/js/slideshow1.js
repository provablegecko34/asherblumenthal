function showImage(index) {
    const imgElement = document.getElementById('slideshow-image');
    if (imgElement) {
        imgElement.classList.remove('fade'); // Remove fade class
        imgElement.src = imageUrls[index];

        // Error handling
        imgElement.onerror = function() {
            nextImage(); // Load the next image if current fails
        };

        // Trigger reflow to restart the animation
        void imgElement.offsetWidth;
        imgElement.classList.add('fade'); // Add fade class
    }
}
