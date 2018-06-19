import React from 'react'

export default class Top10 extends React.Component {

    renderTop10 = () => {
        let teams = this.props.teams
        let enduranceFirst = 0
        let enduranceLast = 999

        let toFixedIfNecessary = ((value) => {
            return +parseFloat(value).toFixed(2);
        })

        teams.map((team) => {
            if (team.endurance > enduranceFirst) {
                enduranceFirst = team.endurance
            }
            return enduranceFirst
        })

        teams.map((team) => {
            if (team.endurance < enduranceLast) {
                enduranceLast = team.endurance
            }
            return enduranceLast
        })

        let table = teams.map((team) => {
            let key = team.id
            let number = team.carnumber
            let name = team.teamname
            let overall = toFixedIfNecessary(parseFloat(team.costevent) +
                parseFloat(team.designevent) +
                parseFloat(team.salespresentation) +
                parseFloat(team.acceleration) +
                parseFloat(team.maneuverability) +
                parseFloat(team.hillclimb) +
                parseFloat(team.suspension) +
                (400 * ((team.endurance - enduranceLast) / (enduranceFirst - enduranceLast))) -
                parseFloat(team.penalties))

            return (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{number}</td>
                    <td>{name}</td>
                    <td>{overall}</td>
                </tr>
            )
        })
        return table
    }

    render() {
        return (
            <div className="w3-container" style={{ paddingLeft: '16px' }}>

                <h5><b><i className="fa fa-dashboard"></i>Top 10</b></h5>

                <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                    <tbody>
                        <tr>

                            <td><b>Rank</b></td>
                            <td><b>Car #</b></td>
                            <td><b>Team</b></td>
                            <td><b>Overall</b></td>

                        </tr>
                        {this.renderTop10()}
                    </tbody>
                </table><br />
            </div>
        )
    }
}