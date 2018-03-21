import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldAction'

class Field extends Component {    
    render () {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input type="text" value={this.props.value} 
                onChange={this.props.changeValue} onFocus={this.handleFocus} onBlur={this.handleOnBlur} />
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {value: state.field.value}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeValue}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
