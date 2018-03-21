import React, { Component } from 'react'

class Field extends Component {
    constructor(props) {
        super(props);
        this.initialValue = {value: props.initialValue}
        this.state = {value: props.initialValue}
        this.handleChange = this.handleChange.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleOnBlur = this.handleOnBlur.bind(this)
    }

    handleChange (event) {
        this.setState({ value: event.target.value })
    }

    handleFocus (event) {
        if ( this.state.value === this.initialValue.value ) {
            this.setState({value: ''})
        }
    }

    handleOnBlur (event) {  
        if ( this.state.value === '' ) {
            this.setState({ value: this.initialValue.value })
        }
    }
    
    render () {
        return (
            <div>
                <label>{this.state.value}</label><br />
                <input type="text" value={this.state.value} 
                onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleOnBlur} />
            </div>
        )
    }

}

export default Field