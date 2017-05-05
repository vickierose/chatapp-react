import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class TextareaScrollbars extends Component {
    constructor(props, ...rest){
        super(props, ...rest);
        this.renderView = this.renderView.bind(this);
        this.renderTrack = this.renderTrack.bind(this);
    }

    renderView({ style, ...props }){
        let styles = {
            width: '100%',
            height: '2rem',
            margin: '1rem',
            borderRadius: '1.5rem',
            overflow: 'hidden'
        }
        return (
            <div className="textarea-container"
                style={{...style, ...styles}}></div>
        )
    }

    renderTrack({ style, ...props }){
        const thumbStyle ={
            position: 'absolute',
            width: '6px',
            right: '15px',
            bottom: '2px',
            top: '2px',
            borderRadius: '3px'
        }
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );

    }


    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                 renderTrackVertical={this.renderTrack}
                {...this.props} />
        );
    }
}

export default TextareaScrollbars;