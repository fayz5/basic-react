import React, { Component } from "react";

import Counter from "./Counter";

export default class Application extends Component {
    render() {
        return (
            <main className='Application'>
                <Counter />
            </main>
        );
    }
}
