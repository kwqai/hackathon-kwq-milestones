const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    // Toggling between 'block' and 'none' for the skills section
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
});

const toggleButton1 = document.getElementById('toggle-references') as HTMLButtonElement
const references = document.getElementById('references') as HTMLElement

toggleButton1.addEventListener('click', () => {
    if (references.style.display === 'none') {
        references.style.display = 'block';
    } else {
        references.style.display = 'none';
    }
});



