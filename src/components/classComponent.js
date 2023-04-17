import React from "react";
import SecondaryComponent from "./classComponent2";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor post super', this);
        this.state = {
            counter:0
        };
    }

    render() {
        console.log('render()');
        const {counter} = this.state;
        return(
            <>
                <h1>State: {this.state.counter}</h1>
                <h1>Props: {this.props.counter}</h1>
                <button onClick={() => this.props.updateFunction()}>Change counter value in Parent(props)</button>
                <button onClick={() => this.setState({counter: counter+1})}>Change counter value in Child(state)</button>
                <SecondaryComponent label={this.props.label} />
            </>
        )
    }
}

export default MainComponent;