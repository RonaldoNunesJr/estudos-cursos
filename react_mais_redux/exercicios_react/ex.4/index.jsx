import React from "react"
import ReactDOM from "react-dom"
import { Primeiro, Segundo } from "./component"
 
ReactDOM.render(
    <div>
        <Primeiro value="Primeiro Componente1!" />
        <Segundo value="Segundo Componente!" />
    </div>
, document.getElementById('app'))
