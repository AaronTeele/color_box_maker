import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            backgroundColor: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.boxInfo(newBox);
        this.setState({
            height: '',
            width: '',
            backgroundColor: '',
        });
    };

    handleInput(e) {
        this.setState({
        [e.target.name]: e.target.value
        });
    };

    render() {

        return (
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="height">Height:</label> 
                        <input 
                            type="text" 
                            value={this.state.height} 
                            name="height" 
                            id="height"  
                            onChange={this.handleInput}
                        />

                    <label htmlFor="width">Width</label>
                        <input 
                            type="text" 
                            value={this.state.width} 
                            name="width" 
                            id="width" 
                            onChange={this.handleInput} 
                        />

                    <label htmlFor="backgroundColor">Background Color:</label>
                        <input 
                            type="text" 
                            value={this.state.backgroundColor} 
                            name="backgroundColor" 
                            id="backgroundColor" 
                            onChange={this.handleInput} 
                        />

                    <button type="submit">Add New Box</button>
                </form>
        );
    };
};

export default NewBoxForm;