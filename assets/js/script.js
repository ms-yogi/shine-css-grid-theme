function smoothScroll(e) {
    
    if (e == "about") {
        document.querySelector('.about').scrollIntoView({
            behavior: 'smooth'
        });
    }
    else if (e == "work") {
        document.querySelector('.work').scrollIntoView({
            behavior: 'smooth'
        });
    }
    else if (e == "contact") {
        document.querySelector('.contact').scrollIntoView({
            behavior: 'smooth'
        });
    }
}
