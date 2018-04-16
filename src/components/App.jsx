import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Counter from "./Counter";
import Search from "./Search";
import NotFound from "./NotFound";

export default class Application extends Component {
    render() {
        return (
            <BrowserRouter>
                <main className='Application'>
                    <Switch>
                        <Route exact path='/' component={Counter} />
                        <Route path='/search' component={Search} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}
