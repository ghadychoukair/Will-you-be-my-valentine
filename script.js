const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

let noClickCount = 0;

// No button hover - change text and shrink
noBtn.addEventListener('mouseenter', () => {
    noBtn.innerText = 'wait...no?';
    noBtn.style.transform = 'scale(0.85)';
});

noBtn.addEventListener('mouseleave', () => {
    noBtn.innerText = 'No 😐';
    noBtn.style.transform = 'scale(1)';
});

// No button click
noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Add shrink animation
    noBtn.classList.add('shrink');
    setTimeout(() => {
        noBtn.classList.remove('shrink');
    }, 500);

    // Show modal on any click
    showModal();
});

// Yes button click
yesBtn.addEventListener('click', () => {
    // You can redirect or show a success page
    alert('🎉 Yay! I love you! 💕');
    // Or uncomment to redirect:
    // window.location.href = 'success.html';
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

function showModal() {
    modal.classList.add('show');
}