import React from "react";

class SecondaryComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <button className="btn btn-primary">Reusable Label: {this.props.label}</button>
            </>
        )
    }
}

export default SecondaryComponent;