import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function Test() {
    let username = 'taylor'
    return (
        <h3>hello from Test() {username}</h3> // {username} is evaluated expression i.e. shob JS task age hoye jabe, ekhane just outcome boshbe
    )
}

// as bundler converts react code to tree structure, if we try to pass an object instead of a react code
const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// different bhabe html code diye dekhi
const reactElemTwo = (
    <a href='https://google.com' target='_blank'>Visit google from reactElemTwo</a>
)



// creating an element using React function
const username = ' Mike '

const reactElemThree = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to get to google from reactElemThree',
    username
)

createRoot(document.getElementById('root')).render(
    // <App />
    // <Test />    // approach 1: works fine if the func is in the same file
    // Test()  // apporach 2: works fine if the func is called normally

    // reactElem   // render() argument hishebe erokom object accept korbe na
    reactElemThree  // approach 3: passing an object created using React.createElement() method jeta kina Babel inject kore ei file e
)
