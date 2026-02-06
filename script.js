// Valentine's Day Invitation - Mobile Responsive Version

// Get DOM elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

// Flag to prevent rapid clicks
let isAnimating = false;

// Yes button handler
yesBtn.addEventListener('click', function() {
    if (isAnimating) return;
    isAnimating = true;
    
    // Show success message
    alert('🎉 You\'ve made me the happiest! 💕');
    
    // Optional: Add celebration animation
    celebrate();
    
    isAnimating = false;
});

// No button handler - Shows modal on mobile and desktop
noBtn.addEventListener('click', function() {
    if (isAnimating) return;
    isAnimating = true;
    
    showModal();
    
    isAnimating = false;
});

// Close modal button
closeBtn.addEventListener('click', function() {
    closeModal();
});

// Close modal when clicking outside (for desktop)
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key (accessibility)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Show modal function
function showModal() {
    modal.classList.add('show');
    closeBtn.focus(); // Focus button for accessibility
}

// Close modal function
function closeModal() {
    modal.classList.remove('show');
    noBtn.focus(); // Return focus to no button
}

// Celebration animation (optional - creates floating hearts)
function celebrate() {
    const hearts = ['❤️', '💕', '💖', '💗'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '0';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.opacity = '1';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '999';
        heart.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }
    
    // Add falling animation if not already defined
    if (!document.querySelector('style[data-animation="fall"]')) {
        const style = document.createElement('style');
        style.setAttribute('data-animation', 'fall');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Touch feedback for buttons (mobile)
[yesBtn, noBtn, closeBtn].forEach(button => {
    button.addEventListener('touchstart', function() {
        this.style.opacity = '0.8';
    });
    
    button.addEventListener('touchend', function() {
        this.style.opacity = '1';
    });
});

// Prevent accidental double-clicks
[yesBtn, noBtn].forEach(button => {
    button.addEventListener('dblclick', function(e) {
        e.preventDefault();
    });
});

// Log initial page load
console.log('Valentine invitation loaded! 💕');
