import { stringToHTML } from '../helpers/stringToHtmlHelper'
import { getPersons } from '../services/exampleService'
import template from './exampleComponent.html'

export default class exampleComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        // modify string
        let modifiedTemplate = template
        modifiedTemplate = modifiedTemplate.replace('{title}', 'example list')

        // modify html
        let htmlTemplate = stringToHTML(this, modifiedTemplate)
        let ul = htmlTemplate.querySelector('ul')

        getPersons.map(function (item) {
            let li = document.createElement('li')
            li.innerText = item.name
            return ul?.append(li)
        })

        // append html
        this.append(htmlTemplate)
    }
    attributeChangeCallback() {}
    disconnectedCallback() {}
}
