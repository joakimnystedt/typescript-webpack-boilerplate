import './assets/styles.scss'
import { getPersons, getMergedAges } from './services/exampleService'

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
    console.log(getPersons, 'All persons in an array')
    console.log(getMergedAges, 'All ages merged!')
})
