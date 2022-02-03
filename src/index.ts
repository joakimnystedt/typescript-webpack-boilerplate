import boiler from './services/boilService'

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
    console.log(boiler())
})
