import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Counter extends Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decriment = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }
    };
    reset = () => {
        this.setState({
            count: 0
        });
    };

    render() {
        const { count } = this.state;
        return (
            <section>
                <h1> Count: {count} </h1>
                <div className='row btn-group' role='group'>
                    <button
                        onClick={this.increment}
                        className='btn btn-success'
                    >
                        Increment
                    </button>
                    <button
                        onClick={this.decriment}
                        className='btn btn-warning'
                    >
                        Decrement
                    </button>
                    <button onClick={this.reset} className='btn btn-danger'>
                        Reset
                    </button>
                </div>
                <div>
                    <Link
                        to='/search'
                        style={{ display: "block", marginTop: "30px" }}
                    >
                        Goto Search >>
                    </Link>
                </div>
            </section>
        );
    }
}
