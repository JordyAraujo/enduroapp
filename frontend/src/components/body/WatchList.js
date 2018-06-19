import React from 'react'

class WatchList extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <div className="w3-left  "><i className={this.props.flag}><b> {this.props.team}</b></i></div>
                <div className="w3-right  " style={{ textAlign: 'right' }}>
                    <h6>-{this.props.lapsB} {this.props.teamB}</h6>
                    <h3>{this.props.position}º - <b>{this.props.laps} voltas</b></h3>
                    <h6>+{this.props.lapsA} {this.props.teamA}</h6>
                </div>

                <div className="w3-clear"></div>
                <div   >
                    <h5>{this.props.score} pontos</h5>
                    <h3><b>{this.props.overall}º Lugar</b></h3>
                </div>

                {/* <div align="right">
                    <div className="grid-container">
                        <div   >
                            <h5><b>Adicionar volta <i className="fa fa-plus-square"></i></b></h5>
                        </div>
                        <div   >
                            <h5><b>Subtrair volta <i className="fa fa-minus-square"></i></b></h5>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default WatchList