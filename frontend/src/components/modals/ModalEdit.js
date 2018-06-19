import React from 'react'

class ModalEdit extends React.Component {

    render() {
    return (

        <div id="id01" className="w3-modal" style={this.props.styleModalEdit}>
            <div className="w3-modal-content w3-animate-zoom">
                <div className="w3-container w3-padding w3-red">
                    <span onClick={this.props.onClickClose}
                        className="w3-button w3-red w3-right w3-xxlarge"><i className="fa fa-remove"></i></span>
                    <h2>Send Mail</h2>
                </div>
                <div className="w3-panel">
                    <label>Team Name</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Team's Name" />
                    <label>Car Number</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="Car #" />
                    <label>Cost Event</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-100 pts" />
                    <label>Design Event</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-150 pts" />
                    <label>Sales Presentation</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-50 pts" />
                    <label>Acceleration</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-75 pts" />
                    <label>Maneuverability</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-75 pts" />
                    <label>Hill Climb</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-75 pts" />
                    <label>Suspension</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-75 pts" />
                    <label>Endurance</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="0-400 pts" />
                    <label>Penalties</label>
                    <input className="w3-input w3-border w3-margin-bottom" type="number" placeholder="Optional" />
                    <div className="w3-section">
                        <a className="w3-button w3-red" onClick={this.props.onClickClose}>Cancel  <i className="fa fa-remove"></i></a>
                        <a className="w3-button w3-light-grey w3-right" onClick={this.props.onClickSave}>Send  <i className="fa fa-floppy-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default ModalEdit