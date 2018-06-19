import React from 'react'

class NavBar extends React.Component {

    render() {
        return (
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={this.props.styleNav} id="mySidebar">
                <br />
                <div className="w3-container w3-row">
                    <div className="w3-col s4">
                        <img alt="bla" src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle w3-margin-right" style={{ width: '46px' }} />
                    </div>
                    <div className="w3-col s8 w3-bar">

                        <span>Welcome, <strong>Guest</strong></span>


                    </div>
                </div>
                <hr />
                <div className="w3-container">
                    <h5>Dashboard</h5>
                </div>
                <div className="w3-bar-block">
                    <button className="w3-bar-item w3-button w3-padding" onClick={this.props.onClickAddButton}>Add Team <i className="w3-padding fa fa-plus"></i></button>
                    <button className="w3-bar-item w3-button w3-padding" onClick={this.props.onClickEditButton}>Edit Team <i className="w3-padding fa fa-pencil"></i></button>
                </div>
            </nav>
        )
    }
}

export default NavBar