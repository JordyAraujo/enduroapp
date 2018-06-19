import React from 'react'
import FormAdd from '../forms/FormAdd'

class ModalAdd extends React.Component {

    render() {
        return (
            <div className="w3-modal" style={this.props.styleModalAdd}>
                <div className="w3-modal-content w3-animate-zoom">
                    <div className="w3-container w3-padding w3-red">
                        <span onClick={this.props.onClickClose}
                            className="w3-button w3-red w3-right w3-xxlarge"><i className="fa fa-remove"></i></span>
                        <h2>Add Team</h2>
                    </div>
                    <FormAdd
                        title="Registration"
                        model={[
                            { key: "teamname", label: "Team Name", placeholder: "Team's Name", props: { required: true } },
                            { key: "carnumber", label: "Car Number", type: "number", placeholder: "Car Number", props: { required: true } },
                            { key: "costevent", label: "Cost Event", type: "number", placeholder: "0-100 pts", props: { min: 0, max: 100 } },
                            { key: "designevent", label: "Design Event", type: "number", placeholder: "0-150 pts", props: { min: 0, max: 150 } },
                            { key: "salespresentation", label: "Sales Presentation", type: "number", placeholder: "0-50 pts", props: { min: 0, max: 50 } },
                            { key: "acceleration", label: "Acceleration", type: "number", placeholder: "0-75 pts", props: { min: 0, max: 75 } },
                            { key: "maneuverability", label: "Maneuverability", type: "number", placeholder: "0-75 pts", props: { min: 0, max: 75 } },
                            { key: "hillclimb", label: "Hill Climb", type: "number", placeholder: "0-75 pts", props: { min: 0, max: 75 } },
                            { key: "suspension", label: "Suspension", type: "number", placeholder: "0-75 pts", props: { min: 0, max: 75 } },
                            { key: "endurance", label: "Endurance", type: "number", placeholder: "Number of Laps" },
                            { key: "penalties", label: "Penalties", type: "number" }
                        ]}
                        onSubmit={(model) => { this.props.onSubmit(model) }}
                        onClickClose={() => { this.props.onClickClose() }}
                    />
                </div>
            </div>
        )
    }
}

export default ModalAdd