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
            <section className='Counter'>
                <h1> Count: {count} </h1>{" "}
                <button onClick={this.increment} className='full-width'>
                    Increment
                </button>
                <button onClick={this.decriment} className='full-width'>
                    Decrement
                </button>
                <button onClick={this.reset} className='full-width'>
                    Reset
                </button>
                <div>
                    <Link
                        to='/search'
                        style={{ display: "block", marginTop: "30px" }}
                    >
                        Search
                    </Link>
                </div>
            </section>
        );
    }
}
