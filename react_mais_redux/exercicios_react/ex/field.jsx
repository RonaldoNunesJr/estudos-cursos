import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ChangeValue } from './fieldAction'

class Field extends Component {    
    render () {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input type="text" value={this.props.value} 
                onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleOnBlur} />
            </div>
        )
    }

}

function mapStateProps(state) {
    return {value: state.field.value}
}

function mapDispatchToProps(dispatch) {
    return {value:}
}

export default connect(mapStateProps, mapDispatchToProps)(Field)
