import * as React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import 'babel-polyfill'

import { Home } from './containers/home'
import { NoMatch } from './containers/no-match'
import { Detail } from './containers/detail'
import { Profile } from './containers/profile'
import { Header } from './components/header'

export function App() {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route exact={true} path="/">
                        <Home />
                    </Route>
                    <Route
                        path="/detail/:id"
                        component={Detail}
                    />
                    <Route
                        path="/profile"
                        component={Profile}
                    />
                    <Route path="*">
                      <NoMatch />
                    </Route>
                </Switch>
            </>
        </BrowserRouter>
    )
}