let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    }); 

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading, .footer', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact, .btn',{origin: 'bottom'});
ScrollReveal().reveal('.about-img, .contact',{origin: 'left'});
ScrollReveal().reveal('.about-content, .serv, .portfolio-box, .contact',{origin: 'right'});


var typed = new Typed('.multiple-text', {
    strings: ['AI ML Developer', 'Frontend Developer','Python Developer','SQL and Data'],
    typeSpeed: 50,
    loop: true,
    backspeed: 50,
  });
