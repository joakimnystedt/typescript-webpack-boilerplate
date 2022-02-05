import { getPersons } from '../services/exampleService'
import template from './exampleComponent.html'

export default class exampleComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = template
        let ul = this.querySelector('ul')

        getPersons.map(function (item) {
            let li = document.createElement('li')
            li.innerText = item.name
            return ul?.append(li)
        })
    }
    attributeChangeCallback() {}
    disconnectedCallback() {}
}
