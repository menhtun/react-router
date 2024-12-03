import { Component, Fragment } from "react";

class Counter extends Component {

    render() {

        return(
            <Fragment>
                <span>{this.state.Counter}</span>
            </Fragment>
        )
    }
}

export default Counter