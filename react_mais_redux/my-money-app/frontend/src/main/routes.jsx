import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Router path='/' component={Dashboard} />
        <Router path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)

