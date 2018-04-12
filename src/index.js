import React, { Component } from 'react';
import cx from 'classnames';
import './slidepanel.css';

class Slidepanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            isPanelOpen,
            closePanel,
            right,
            left,
            top,
            bottom,
            width,
            height,
            bgColor,
            children,
            setWrapperRef
        } = this.props;

        const CNW = "slidepanel_wrapper";

        const CN = cx(
            "slidepanel",
            {"right": right},
            {"left": left},
            {"top": top},
            {"bottom": bottom}
        );

        const PanelStyle = {
            width: width,
            height: height,
            backgroundColor: bgColor
        };

        if(!isPanelOpen) { return null; }

        return (
            <div className = {cx(CNW)}>
                <div
                    className = {cx(CN)}
                    style = { PanelStyle }
                    ref = { setWrapperRef }
                >
                    <div className="wrapp_close_btn">
                        <div
                            className="btn_close_panel"
                            onClick = { closePanel }
                        />
                    </div>
                    {children}
                </div>
            </div>
        )
    }
}

export default Slidepanel;
