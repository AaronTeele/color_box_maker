import React, { Component } from 'react';
import uuid from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';


class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [],
        };
        this.boxInfo = this.boxInfo.bind(this);
    };

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    boxInfo(box) {
        this.setState(st => ({
             boxes: [...st.boxes, box]
        }));
    };

    
    
    render() {
        const boxes = this.state.boxes.map(box => {
               return (
                   <Box
                       key={box.id}
                       id={box.id} 
                       height={box.height} 
                       width={box.width} 
                       backgroundColor={box.backgroundColor}
                       removeBox={() => this.remove(box.id)}
                   />
               );
           });

        return (
            <div>
            <NewBoxForm boxInfo={this.boxInfo} />
            {boxes}
            </div>
        );
    };
};

export default BoxList;