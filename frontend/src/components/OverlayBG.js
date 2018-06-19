import React from 'react'

class OverlayBG extends React.Component {

    render() {
        return (
            <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={this.props.onClick} style={this.props.styleBG} title="close side menu" id="myOverlay"></div>
        )
    }
}

export default OverlayBG