import 'bootstrap'
import './styles/main.scss'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 

dom.i2svg() 





const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    getPerson(getData)
    
})


const getPerson =  (cb) => {
    const url = `https://randomuser.me/api/`
    const ajax = new XMLHttpRequest()

    ajax.open('GET', url, true)

    ajax.onload = function() {
        if(this.status === 200) {
            cb(this.response, showData)
        } else {
            this.onerror()
        }
    }

    ajax.send()

    ajax.onerror = () => { console.log("There was an error"); }
}


const getData = (response, cb) => {
    const data = JSON.parse(response)

    const { name: {first}, name: {last}, picture: {large}, location: {street}, phone, email } = data.results[0]

    cb(first, last, large, street, phone, email)
}

const showData = (first, last, large, street, phone, email) => {

    document.getElementById('first').textContent = first;
    document.getElementById('last').textContent = last;
    document.getElementById('street').textContent = street.number + "  " + street.name;
    document.getElementById('phone').textContent = phone;
    document.getElementById('email').textContent = email;
    document.getElementById('photo').src = large;
}