import React, { Component } from 'react';

class Box extends Component {
    static defaultProps = {
        height: '100',
        width: '100',
        backgroundColor: 'teal',
    };

    style = {
        height: `${this.props.height}px`,
        width: `${this.props.width}px`,
        backgroundColor: `${this.props.backgroundColor}`,
    };

    render() {
        return (
            <div className="Box">
                <div style={this.style}></div>
                <button onClick={this.props.removeBox}>X</button>
            </div>

        );
    };
};

export default Box;