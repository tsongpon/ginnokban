import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import RestaurantList from './RestaurantList'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <br/>
                    <br/>
                    <br/>
                    <Switch>
                        <Route name='scg' exact path="/" component={RestaurantList} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}