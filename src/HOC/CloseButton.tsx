import React from "react"
import { withButtonComponent } from "./withButtonComponent";

class CloseButton extends React.Component {

    render (): any {
        return (
            <a href='#dummyA'>
                x
            </a>
        )
    }
}

export default withButtonComponent(CloseButton)