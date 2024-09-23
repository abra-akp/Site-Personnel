//open and close navbar
const openBtn = document.querySelector('#open__btn');
const closeBtn = document.querySelector('#close__btn');
const navList = document.querySelector('.nav__links');

//open menu
const openMenu = () => {
    openBtn.style.display = 'none';
    navList.style.display = 'flex';
    closeBtn.style.display ='inline-flex';
}

//clise menu
const closeMenu = () => {
    openBtn.style.display = 'inline-flex';
    navList.style.display = 'none';
    closeBtn.style.display = 'none'
}

closeBtn.addEventListener('click', closeMenu);

openBtn.addEventListener('click', openMenu);


const header = document.querySelector('header');

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__links li a');

    
// hide navbar when click in link

if (window.innerWidth <= 1025) {

    // hide navbar when lick

const hideNav = navLinks.forEach( link => {
    link.addEventListener('click', closeMenu);
})
}


document.addEventListener('scroll', () => {
    // change background of navbar when scoll
    header.classList.toggle('sticky', window.scrollY > 50);

    // go to section when click
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY > sectionTop -200) {
            current = section.getAttribute('id');
        };
    });

    navLinks.forEach( link => {
        link.classList.remove('active');

        if(link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    })
})


//REVEAL JS
const revealTop = ScrollReveal({ 
    reset: false,
    distance: '80px',
    origin: 'top',
    duration: 2000
 });
//top
revealTop.reveal('.home__left h5', { delay: 100 });
revealTop.reveal('.heading, .home__left p, .home__left .btn__box,.contact__top,.scroll', { delay: 200 });
revealTop.reveal('.home__left h1, .home__left .home__social ', { delay: 250 });
revealTop.reveal('.home__img', { delay: 300 });
revealTop.reveal('.projects__box', { delay: 300 });
revealTop.reveal('.projects__box .project2', { delay: 350 });
revealTop.reveal('.projects__box .project3', { delay: 400 });

 // bottom
 const revealBottom = ScrollReveal({ 
    reset: false,
    distance: '80px',
    origin: 'bottom',
    duration: 2000
 });

 revealBottom.reveal('.about__left, .contact__bottom .left', { delay: 200 }); 
 revealBottom.reveal('.about__right,.contact__bottom form', { delay: 400 }); 
 



// TYPED JS

const typed = new Typed('.multiple__text', {
    strings: ['Développeur Web', 'Youtubeur', 'Graphic Designer', 'Blogueur'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });