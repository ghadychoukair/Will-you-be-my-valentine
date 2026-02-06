document.getElementById('noButton').addEventListener('mouseenter', function() {
    this.innerText = 'wait...no?';
});
document.getElementById('noButton').addEventListener('mouseleave', function() {
    this.innerText = 'No 😐';
});