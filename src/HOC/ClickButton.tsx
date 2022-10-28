import React from "react"
import { withButtonComponent } from "./withButtonComponent"

class ClickButton extends React.Component<{}, {link:string}> {

    render ():any {
        console.log(this.props)
        return (
            <a href='#sample'>
                text
            </a>
        )
    }
}

export default withButtonComponent(ClickButton)