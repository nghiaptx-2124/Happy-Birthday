// Add this at the beginning of the file
window.addEventListener('load', function() {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.5;
    audio.play().catch(error => {
        console.log("Auto-play failed:", error);
    });
});

const audio = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const wishesContainer = document.getElementById('wishesContainer');

// Function to handle audio play
function playAudio() {
    audio.volume = 0.5;
    audio.play().then(() => {
        musicToggle.textContent = '🔇 Mute Music';
    }).catch((error) => {
        console.log('Playback failed:', error);
        musicToggle.textContent = '🎵 Play Music';
    });
}

// Music control
musicToggle.addEventListener('click', () => {
    if (audio.paused) {
        playAudio();
    } else {
        audio.pause();
        musicToggle.textContent = '🎵 Play Music';
    }
});

// Try to play when user interacts with the page
document.body.addEventListener('click', function() {
    if (audio.paused) {
        playAudio();
    }
}, { once: true });

// Create cherry blossom petals
function createPetal(customPetalTypes) { // Added customPetalTypes parameter
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // Random starting position and movement
    const startX = Math.random() * window.innerWidth;
    const rotation = Math.random() * 360;
    const scale = 0.5 + Math.random() * 0.5;
    
    petal.style.cssText = `
        left: ${startX}px;
        top: -50px;
        transform: rotate(${rotation}deg) scale(${scale});
        animation: falling ${5 + Math.random() * 5}s linear infinite;
    `;
    
    // Randomize between different petal types
    const petalTypesToUse = customPetalTypes || ['🌸', '🎀', '💮']; // Use custom or default
    petal.innerHTML = petalTypesToUse[Math.floor(Math.random() * petalTypesToUse.length)];
    petal.style.fontSize = (15 + Math.random() * 10) + 'px';
    petal.style.opacity = 0.6 + Math.random() * 0.4;
    
    document.body.appendChild(petal);
    
    // Remove petal after animation
    setTimeout(() => {
        petal.remove();
    }, 10000);
}

// Create more petals for a denser effect
// setInterval(createPetal, 200); // We will call this from HTML with specific petal types

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes falling {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, 50vh) rotate(180deg) scale(0.8);
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, 100vh) rotate(360deg) scale(0.6);
        }
    }
`;
document.head.appendChild(style);

// Create wish cards
function createWishCards(wishesArray) { // Added wishesArray parameter
    const wishesContainer = document.getElementById('wishesContainer');
    if (!wishesContainer) {
        console.error('Element with ID wishesContainer not found.');
        return;
    }
    wishesContainer.innerHTML = ''; // Clear existing cards
    let currentExpanded = null;

    wishesArray.forEach((wish, index) => { // Use the passed wishesArray
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        
        const content = document.createElement('div');
        content.className = 'wish-card-content';
        
        const img = document.createElement('img');
        img.src = wish.image;
        img.className = 'wish-card-image';
        img.alt = `Birthday wish ${index + 1}`;
        
        const text = document.createElement('div');
        text.className = 'wish-text';
        text.innerHTML = wish.text.replace(/\n/g, '<br>');
        
        content.appendChild(img);
        content.appendChild(text);
        wishCard.appendChild(content);
        
        // Hover handlers
        wishCard.addEventListener('mouseenter', () => {
            if (currentExpanded) {
                currentExpanded.classList.remove('expanded');
            }
            wishCard.classList.add('expanded');
            currentExpanded = wishCard;
        });

        wishesContainer.appendChild(wishCard);
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // createWishCards(); // Called from HTML
    playAudio();
    // Call createPetal with default types for general case, or specific types from HTML
    // This will be handled in individual HTML files to allow customization
});