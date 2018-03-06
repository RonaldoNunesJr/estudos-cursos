import React from "react"
import { childrenWithProps } from "../utils/reactUtils"

export default props => (
    <div>
        <h1>Família</h1>        
        <ul>
            { childrenWithProps(props.children, props) }
        </ul>
    </div>
)