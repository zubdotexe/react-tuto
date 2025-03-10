const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

function customRender(reactElem, mainContainer) {
    // const domElem = document.createElement(reactElem.type);
    // domElem.innerHTML = reactElem.children;
    // domElem.setAttribute('href', reactElem.props.href);
    // domElem.setAttribute('target', reactElem.props.target);

    // mainContainer.append(domElem);

    // as the above lines are hard-coded thus, if the number of props increase or decrease, the code won't work, and that's y we will be using a loop

    const domElem = document.createElement(reactElem.type);
    domElem.innerHTML = reactElem.children;

    for(let prop in reactElem.props) {
        if(prop === 'children') continue;

        domElem.setAttribute(prop, reactElem.props[prop]);
    }

    mainContainer.appendChild(domElem);
}

customRender(reactElem, mainContainer)