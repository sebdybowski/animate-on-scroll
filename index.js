const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
});

const sections = document.querySelectorAll('.hide');

console.log(sections);

sections.forEach(section => observer.observe(section));