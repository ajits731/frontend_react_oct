import React from "react";
import SecondaryComponent from "./classComponent2";
import ListGroup from 'react-bootstrap/ListGroup';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        // console.log('constructor');
        this.state = {
            counter:0,
            inputVal:'',
            products:[],
            name: 'John'
        };

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((response) => this.setState({products:response}))
    }

    setInputValue() {
        console.log('this.inputRef', this.inputRef.current.value);
    }
    render() {
        console.log('this.state:', this.state);
        const {counter, products} = this.state;
        return(
            <>  
                <h1 onMouseOver={() => console.log('OnMouseOver')} onMouseLeave={() => console.log('OnMouseLeave')} >State: {this.state.counter}</h1>
                <h1>Props: {this.props.counter}</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.setInputValue()} className="btn btn-primary">Set Input Value from outside</button>
                <ListGroup>
                    {products.map((product) => <ListGroup.Item>{product.title}</ListGroup.Item>)}
                </ListGroup>
                <p>{`hi my name is ${this.state.name}`}</p>
                {/* <button onClick={() => this.props.updateFunction()}>Change counter value in Parent(props)</button>
                <button onClick={() => this.setState({counter: counter+1})}>Change counter value in Child(state)</button> */}
                {/* <SecondaryComponent label={this.props.label} /> */}
            </>
        )
    }
}

export default MainComponent;