import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function initGsap() {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from('.home__data', { opacity: 0, duration: 2, delay: 0.8, y: 25 })
  gsap.from('.home__greeting, .home__name, home__profession, .home__button', {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: 25,
    ease: 'expo:out',
    stagger: 0.2,
  })

  gsap.from('.nav__logo, .nav__toggle', {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    y: 25,
    ease: 'expo:out',
    stagger: 0.2,
  })
  gsap.from('.nav__item', {
    opacity: 0,
    duration: 2,
    delay: 1.8,
    y: 25,
    ease: 'expo:out',
    stagger: 0.2,
  })
  gsap.from('.home__social-icon', {
    opacity: 0,
    duration: 2,
    delay: 2.3,
    y: 25,
    ease: 'expo:out',
    stagger: 0.2,
  })

  /* GSAP Scroll Trigger */

  const sectionsScrollTrigger = document.querySelectorAll('section:not(.home)')

  sectionsScrollTrigger.forEach((section) => {
    gsap.fromTo(
      section,
      { y: '+=100', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    )
  })
}
