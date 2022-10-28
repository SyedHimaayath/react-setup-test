import React, { ReactElement } from "react";

export function withButtonComponent (WrappedComponent: any): any {
    return class Button extends React.Component {

        constructor (props:any) {
            super(props);
            this.state = {
                checkValue: 100
            }
        }

        componentDidMount (): void {
            console.log(this.props)
        }

        render (): ReactElement {
            return (
                <WrappedComponent text='sampleText' link='sampleLink' {...this.props}/>
            )
        }
    }
}