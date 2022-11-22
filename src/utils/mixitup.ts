import mixitup from 'mixitup'

export default function initMixitup() {
  mixitup('.portfolio__container', {
    selectors: {
      target: '.portfolio__content',
    },
    animation: {
      duration: 400,
    },
  })
}
