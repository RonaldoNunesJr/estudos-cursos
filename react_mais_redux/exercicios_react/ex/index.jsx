import React from "react"
import ReactDOM from "react-dom"
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from "./field"

const reducers = combineReducers({
    field: () => ({ value: 'Opa' })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field value="Teste" initialValue="Escreva Algo" />
    </Provider>
, document.getElementById('app'))
