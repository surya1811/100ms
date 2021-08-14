import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom'
import App from './App'
import Character from './Character'

const Page = () => {

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <App />
                </Route>
                <Route path = '/:char_id'>
                    <Character />
                </Route>
            </Switch>
        </Router>
    )
}


export default Page