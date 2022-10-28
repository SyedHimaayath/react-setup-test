import React, { ReactElement } from "react"

interface ButtonProps {
    text: string,
    link: string,
    color: 'Red' | 'Green'
}

export function Button (props:ButtonProps): Function {
    const { color } = props;
    let returnFunc;
    if(color === 'Red') {
        returnFunc = renderRedButton
    } else {
        returnFunc = renderGreenButton
    }
    return renderButton(returnFunc, props)
}

function renderButton (renderFunction: Function, props:ButtonProps): Function {
    return renderFunction(props.text, props.link);
}

function renderRedButton (text:string, link: string): ReactElement {
    return (
        <div>Red Button {text}, {link}</div>
    )
}

function renderGreenButton (text: string, link:string): ReactElement {
    return (
        <div>Green Button {text}, {link}</div>
    )
}