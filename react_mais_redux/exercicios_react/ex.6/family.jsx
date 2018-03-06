import React from "react"

export default props => (
    <div>
        <h1>Família</h1>        
        <ul>
            {React.Children.map(props.children, child => React.cloneElement(child, {...props}))}
        </ul>
    </div>
)