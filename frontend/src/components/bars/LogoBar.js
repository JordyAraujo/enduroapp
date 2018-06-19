import React from 'react'

class LogoBar extends React.Component {

    render() {
        return (
            <div className="w3-bar w3-top w3-black w3-large">
                <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={this.props.onClick}><i className="fa fa-bars"></i>  Menu</button >
                <span className="w3-bar-item w3-right">Estratégia de Enduro</span>
            </div>
        )
    }

}

export default LogoBar