import baguetteBox from 'baguettebox.js'
import 'baguettebox.js/dist/baguetteBox.min.css'

export default function initBaguetteBox() {
  baguetteBox.run('.gallery', {
    captions: function (element: HTMLElement) {
      return element.getElementsByTagName('img')[0].alt
    },
  })
}
