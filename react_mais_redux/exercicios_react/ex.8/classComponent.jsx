import React, { Component } from "react"

//export default class ClassComponent React.Component { --Caso não exporte o Component
export default class ClassComponent extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}