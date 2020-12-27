const showModalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.closeBtn')

// Show modal btn
showModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

// Close btn
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})


// close modal if we click outside the modal
window.addEventListener('click', (e) => {
    if(e.target == modal)
        modal.style.display = 'none';
})


