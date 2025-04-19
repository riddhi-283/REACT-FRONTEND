import React, { Children } from "react"

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const maincontainer = document.querySelector('#root')

customRender(reactElement, maincontainer)
