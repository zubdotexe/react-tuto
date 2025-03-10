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
    const domElem = document.createElement(reactElem.type);
    domElem.innerHTML = reactElem.children;
    domElem.setAttribute('href', reactElem.props.href);
    domElem.setAttribute('target', reactElem.props.target);

    mainContainer.append(domElem);
}

customRender(reactElem, mainContainer)