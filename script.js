// Valentine's Day Invitation - Mobile Responsive Version

// Get DOM elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const yesModal = document.getElementById('yesModal');
const noModal = document.getElementById('noModal');
const closeYesBtn = document.getElementById('closeYesBtn');
const closeNoBtn = document.getElementById('closeNoBtn');
const content = document.querySelector('.content');
const heartImageContainer = document.getElementById('heartImageContainer');
const body = document.body;

// Flag to prevent rapid clicks
let isAnimating = false;
let hasClickedYes = false;
let celebrationLoopInterval = null;

// Yes button handler - Shows modal with celebratory message
yesBtn.addEventListener('click', function() {
    if (isAnimating) return;
    isAnimating = true;
    
    showYesModal();
    celebrate();
    
    isAnimating = false;
});

// No button handler - Shows modal asking to try again
noBtn.addEventListener('click', function() {
    if (isAnimating) return;
    isAnimating = true;
    
    showNoModal();
    
    isAnimating = false;
});

// Close Yes modal button
closeYesBtn.addEventListener('click', function() {
    closeYesModal();
});

// Close No modal button
closeNoBtn.addEventListener('click', function() {
    closeNoModal();
});

// Close modal when clicking outside (for desktop)
yesModal.addEventListener('click', function(event) {
    if (event.target === yesModal) {
        closeYesModal();
    }
});

noModal.addEventListener('click', function(event) {
    if (event.target === noModal) {
        closeNoModal();
    }
});

// Close modal with Escape key (accessibility)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (yesModal.classList.contains('show')) {
            closeYesModal();
        } else if (noModal.classList.contains('show')) {
            closeNoModal();
        }
    }
});

// Show Yes modal function
function showYesModal() {
    yesModal.classList.add('show');
    closeYesBtn.focus();
}

// Close Yes modal function
function closeYesModal() {
    yesModal.classList.remove('show');
    hasClickedYes = true;
    
    // Hide original content and show heart image
    content.classList.add('hidden');
    heartImageContainer.style.display = 'block';
    body.classList.add('celebration-mode');
    
    // Start looping celebration hearts
    startCelebrationLoop();
    
    // Return focus
    yesBtn.focus();
}

// Show No modal function
function showNoModal() {
    noModal.classList.add('show');
    closeNoBtn.focus();
}

// Close No modal function
function closeNoModal() {
    noModal.classList.remove('show');
    noBtn.focus();
}

// Celebration animation - Creates falling hearts (single burst)
function celebrate() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.fontSize = Math.random() * 20 + 25 + 'px';
            heart.style.opacity = '1';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '999';
            heart.style.animation = `fall ${Math.random() * 2 + 2.5}s linear forwards`;
            heart.style.textShadow = '0 2px 4px rgba(0,0,0,0.2)';
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 4500);
        }, i * 100);
    }
}

// Looping celebration - Creates falling hearts continuously
function startCelebrationLoop() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    // Create hearts every 300ms
    celebrationLoopInterval = setInterval(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '-50px';
                heart.style.fontSize = Math.random() * 20 + 25 + 'px';
                heart.style.opacity = '1';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '999';
                heart.style.animation = `fall ${Math.random() * 2 + 2.5}s linear forwards`;
                heart.style.textShadow = '0 2px 4px rgba(0,0,0,0.2)';
                
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 4500);
            }, i * 100);
        }
    }, 500); // Creates new hearts every 500ms
}

// Stop celebration loop function (if needed)
function stopCelebrationLoop() {
    if (celebrationLoopInterval) {
        clearInterval(celebrationLoopInterval);
        celebrationLoopInterval = null;
    }
}

// Touch feedback for buttons (mobile)
[yesBtn, noBtn, closeYesBtn, closeNoBtn].forEach(button => {
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
