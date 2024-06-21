/*const header = document.getElementById('header');
header.addEventListener('mouseover', function () {
    header.style.backgroundColor = 'var(--verde-menta)';
});

header.addEventListener('mouseout', function () {
    const sectionHero = document.getElementById('hero');
    const rect = sectionHero.getBoundingClientRect();
    if (rect.bottom >= 0) {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'blur(5px)'
    }
});

window.addEventListener('scroll', function () {
    const sectionHero = document.getElementById('hero');
    const rect = sectionHero.getBoundingClientRect();
    const header = document.getElementById('header');
    header.style.backgroundColor = rect.bottom < 0 ? '#fff' : 'transparent';
}); */

const header = document.getElementById('header');
const sectionHero = document.getElementById('hero');

function handleMouseover() {
    header.style.backgroundColor = 'var(--verde-menta)';
}

function handleMouseout() {
    const rect = sectionHero.getBoundingClientRect();
    if (rect.bottom >= 0) {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'blur(5px)';
    }
}

function handleScroll() {
    const rect = sectionHero.getBoundingClientRect();
    header.style.backgroundColor = rect.bottom < 0 ? 'var(--verde-menta)' : 'transparent';
    header.style.transition = rect.bottom < 0 ? '' : '1s';
}

header.addEventListener('mouseover', handleMouseover);
header.addEventListener('mouseout', handleMouseout);
window.addEventListener('scroll', handleScroll);
