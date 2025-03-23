document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        let navBar = document.querySelector('nav');
        if (window.scrollY > 0) {
            navBar.style.background = 'white';
            navBar.style.boxShadow = '0 5px 20px rgba(190, 190, 190, 0.15)'
        }
        else {
            navBar.style.background = 'transparent';
            navBar.style.boxShadow = 'none'
        }
    })
})