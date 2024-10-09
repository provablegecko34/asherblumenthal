  const imageUrls = [
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEPP730CKG3yAmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEqQ4zN7b2dkU-cZqK6FRuk7Hqg0Ht7A24/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEvLdTzQMnl0wmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YF8MqLAHQKxNQmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YEFD5K8XY_rNzAmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YFlTv61z5_5ZgmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YG2W8FmL7HvZ0-cZqK6FRuk7Hqg0Ht7A24/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGd3y0ZoCCWSQmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGmg2cp8GfcBU-cZqK6FRuk7Hqg0Ht7A24/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGxt6bsREQVmO97ksGSfQw8DLd8-YhK0A5i_pWM54Un4Q/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YH2g9vD_JXO5K68KbvZiioPivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHFbJ5EJVHuSgmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHhgxaPK5dybQmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHU82j-cjfOrwmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHYllattxQPZgmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHuqD0oT91EtAmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHRtdVugCLDNQmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHRhSCPqLUTOQmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHotL-4cvG5QQmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHOGsTG9nH4Na68KbvZiioPivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGtIMsfiH6CdAmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGsfK5Kj2O9O668KbvZiioPivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YGq_tJXZALdbAmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHr71Oox03SBgmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YHJ4J1Ju_Q5g-cZqK6FRuk7Hqg0Ht7A24/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YI_dENZDWGdBwmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YIo__bMvWV1NQmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YI8X9rglAnvNzAmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YIxuxzGdJhIuw-cZqK6FRuk7Hqg0Ht7A24/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YJAXx9_5nMXVQmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YJJJf--BO2vSQmtoKug6n4_ivYORwFHej4/item.JPG",
            "https://img.nikonsrc.com/image/hm6uR3ZIM2lTx8AyszEaGNmv121erxS56ztw9oWb4YK_blgVN7VaO68KbvZiioPivYORwFHej4/item.JPG"
        ];

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
    imgElement.src = imageUrls[index]; // Update the source
}

// Start the slideshow
function startSlideshow() {
    slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        showImage(currentIndex);
    }, 3000); // Change image every 3 seconds
}

// Stop the slideshow
function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Navigation functions
function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    showImage(currentIndex);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
    startSlideshow();
});
