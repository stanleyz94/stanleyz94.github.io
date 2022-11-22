import lang from '../data/lang.json'
import { LangList } from '../types/LangList'

export default function initLanguageChanger() {
  const langList = Object.values(LangList)
  const langContainers = document.querySelectorAll('.lang')

  const changeLanguage = (data: Object) => {
    const values = Object.values(data)
    values.forEach((value, i) => {
      langContainers[i].innerHTML = value
    })
  }

  const select = document.querySelector('.nav__select') as HTMLElement

  langList.forEach((lang) => {
    const option = document.createElement('option')
    option.innerText = lang
    option.value = lang
    select.appendChild(option)
  })
  select.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement
    const value = target.value as LangList
    changeLanguage(lang[value])
  })
}
