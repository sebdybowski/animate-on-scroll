const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
});

const sections = document.querySelectorAll('section');

console.log(sections);

sections.forEach(section => observer.observe(section));