/*Show Menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

/* Remove Menu Mobile */

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');

}

navLink.forEach(n => n.addEventListener('click', linkAction));


/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach( current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            document.querySelector('.nav__list').children[3].lastChild.classList.remove('active-link');
            document.querySelector('.nav__list').children[4].lastChild.classList.add('active-link');        
          } else {
              document.querySelector('.nav__list').children[4].lastChild.classList.remove('active-link');
          }
        } 
        
         else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');

        }
    })
}
window.addEventListener('scroll', scrollActive);


/* Change Background Header */

function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);


/* Show Scroll Top */

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop);











/* Mixitup */

const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});


/* Link active portfolio */

const linkPortfollio = document.querySelectorAll('.portfolio__item');


function activePortfolio(){
    if(linkPortfollio){
        linkPortfollio.forEach( l => l.classList.remove('active-portfolio'));
        this.classList.add('active-portfolio');
    }
}

linkPortfollio.forEach(l => l.addEventListener('click', activePortfolio));




/* GSAP Animation */

// gsap.from('.home__img', {opacity: 0, duration: 1, delay: .5, x:60});
gsap.from('.home__data', {opacity: 0, duration: 2, delay: .8, y:25});
gsap.from('.home__greeting, .home__name, home__profession, .home__button', {opacity: 0, duration: 2, delay: 1, y:25, ease:'expo:out', stagger:.2});



gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay: 1.5, y:25, ease:'expo:out', stagger:.2});
gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 1.8, y:25, ease:'expo:out', stagger:.2});
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay: 2.3, y:25, ease:'expo:out', stagger:.2});






/* GSAP Scroll Trigger */

gsap.registerPlugin(ScrollTrigger);


const sectionsScrollTrigger = document.querySelectorAll('section:not(.home)');


sectionsScrollTrigger.forEach(section => {

    gsap.fromTo(section, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'easeInOut', scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      
    
      }
        });


});




/* Modal Window */


const projects = [
  {
    modal: "modal-first",
    img_large:"img/work1_large.png",
    img: "img/work1.jpg",
    description: "Application that request JSON object from the API to generate 12 random users. Clicking the user’s image or name will open a modal window with more detailed information. <br> Built using vanilla JavaScript, HTML, CSS.",
    url: "https://github.com/stanleyz94/techdegree-project-8"
  }, 
  {
    modal: "modal-second",
    img_large:"img/work2_large.png",
    img: "img/work2.jpg",
    description: "Web dashboard that uses JavaScript library Chart.js for data visualization and Local storage to save the settings. <br> Built using vanilla JavaScript, HTML, CSS, and localStorage",
    url: "https://github.com/stanleyz94/techdegree-project-7"
  },
  {
    modal: "modal-third",
    img_large:"img/work3_large.png",
    img: "img/work3.jpg",
    description: "A word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase. <br>Built using vanilla JavaScript.",
    url: "https://github.com/stanleyz94/techdegree-project-6"
  },
  {
    modal: "modal-fourth",
    img_large:"img/work4_large.png",
    img: "img/work4.jpg",
    description: "An interactive photo gallery using JavaScript and CSS Grid Layout.",
    url: "https://github.com/stanleyz94/techdegree-project-5"
  },
  {
    modal: "modal-fifth",
    img_large:"img/work5_large.png",
    img: "img/work5.jpg",
    description: "Project in which I converted the CSS into Sass by splitting the code into several Sass partial files. I minimized repeated values (length units, colors, etc.).",
    url: "https://github.com/stanleyz94/techdegree-project-4"
  },
  {
    modal: "modal-sixth",
    img_large:"img/work6_large.png",
    img: "img/work6.jpg",
    description: "A simple responsive, mobile-friendly registration form using a wide variety of HTML form input types and attributes.",
    url: "https://github.com/stanleyz94/techdegree-project-3"
  }
];





let modalContainer = document.querySelector('.modal__container');


function generate() {
  projects.forEach( project => {
    
    modalContainer.innerHTML += `
    <div class="modal" id="${project.modal}">
    <div class="modal-header gallery">
      <a href="${project.img_large}">
      <img src="${project.img}">
      </a>
    </div>
    <div class="modal-body">
      <p class="lang">${project.description}</p>
      
      
    </div>
    <div class="modal-footer">
        <a href="${project.url}" class="button"><i class='bx bx-link-external modal-icon'></i>GitHub</a>
        <a data-close-button type="button" class="button lang">Close</a>
    </div>
  </div>
    `;

    

  });

}

generate();



const openModalButtons = document.querySelectorAll('[data-modal-target]');

const closeModalButtons = document.querySelectorAll('[data-close-button]');

const overlay = document.getElementById('overlay');



openModalButtons.forEach( button =>  {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);

  openModal(modal)
  });
});


overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
});


closeModalButtons.forEach( button =>  {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
  closeModal(modal);
  })
});



function openModal (modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal (modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}




/* Language Changer */





let langList = ['English', 'Polski', '日本語'];





let langContainers = document.querySelectorAll('.lang');




let init = (data) => {

    values = Object.values(data);
    values.forEach( (value, i) => {
        
        langContainers[i].innerHTML = value;
        
       
    });
    
  

   

    
}

let select = document.querySelector('.nav__select');

langList.forEach(lang => {
    let option = document.createElement('option');
    option.innerText = lang;
    option.value = lang; 
    select.appendChild(option);
})






select.addEventListener('change', (event) => {
    fetch(`https://stanleyz94.github.io/lang/${event.target.value}.json`)
    .then(e => e.json())
    .then(data => init(data))
    .catch(e=> console.error(e));
    


})




/* baguetteBox */

baguetteBox.run('.gallery', {
  captions: function(element) {
      return element.getElementsByTagName('img')[0].alt;
  }
});
