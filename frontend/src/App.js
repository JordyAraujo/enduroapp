import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import LogoBar from './components/bars/LogoBar'
import NavBar from './components/bars/NavBar'
import ModalAdd from './components/modals/ModalAdd'
import ModalEdit from './components/modals/ModalEdit'
import OverlayBG from './components/OverlayBG'
import WatchList from './components/body/WatchList'
import TeamsList from './components/body/TeamsList'

const apiURL = "http://localhost:8000/api/team/"

/* function renderTeam(team) {
  return (<b>{team.teamname}</b>)
} */

class App extends Component {
  constructor() {
    super()
    this.state = {
      styleNav: {
        zIndex: 3,
        width: '300px',
        display: 'none',
      },
      styleBG: {
        mouse: 'pointer',
        display: 'none',
      },
      styleModalAdd: {
        zIndex: 4,
        display: 'none',
      },
      styleModalEdit: {
        zIndex: 4,
        display: 'none'
      },
      teams: []
    }

    this.handleClickOpenModalAdd = this.handleClickOpenModalAdd.bind(this)
    this.handleClickOpenModalEdit = this.handleClickOpenModalEdit.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClickClose = this.handleClickClose.bind(this)
  }

  renderLogoBar() {
    return (
      <LogoBar
        onClick={() => this.handleClickOpen()}
      />
    )
  }

  renderNav() {
    return (
      <NavBar
        styleNav={this.state.styleNav}
        onClick={() => this.handleClickClose()}
        onClickAddButton={() => this.handleClickOpenModalAdd()}
        onClickEditButton={() => this.handleClickOpenModalEdit()}
      />
    )
  }

  renderModalAdd() {
    return (
      <ModalAdd
        styleModalAdd={this.state.styleModalAdd}
        onClickClose={() => this.handleClickClose()}
        onSubmit={(model) => this.onSubmit(model)}
      />
    )
  }

  renderModalEdit() {
    return (
      <ModalEdit
        styleModalEdit={this.state.styleModalEdit}
        onClickClose={() => this.handleClickClose()}
      />
    )
  }

  renderOverlayBG() {
    return (
      <OverlayBG
        styleBG={this.state.styleBG}
        onClick={() => this.handleClickClose()}
      />
    )
  }

  renderWatchList1() {
    return (
      <WatchList
        className="w3-container grid-container w3-red w3-padding-16"
        team={this.state.teams.length>=1 ? this.state.teams[0].teamname : null}
        teamA="FEI Baja"
        lapsA="1"
        teamB=""
        lapsB="0"
        position="1"
        laps="54"
        score="897"
        overall="1"
        flag="fa fa-flag-checkered w3-xlarge"
      />
    )
  }

  renderWatchList2() {
    return (
      <WatchList className="w3-container grid-container w3-blue w3-padding-16"
        team={this.state.teams.length>1 ? this.state.teams[1].teamname : null}
        teamA="FEI Baja"
        lapsA="1"
        teamB=""
        lapsB="0"
        position="1"
        laps="54"
        score="897"
        overall="1"
        flag="fa w3-xlarge"
      />
    )
  }

  renderWatchList3() {
    return (
      <WatchList className="w3-container grid-container w3-teal w3-padding-16"
        team={this.state.teams.length>2 ? this.state.teams[2].teamname : null}
        teamA="FEI Baja"
        lapsA="1"
        teamB=""
        lapsB="0"
        position="1"
        laps="54"
        score="897"
        overall="1"
        flag="fa w3-xlarge"
      />
    )
  }

  renderWatchList4() {
    return (
      <WatchList className="w3-container grid-container w3-orange w3-padding-16"
        team={this.state.teams.length>3 ? this.state.teams[3].teamname : null}
        teamA="FEI Baja"
        lapsA="1"
        teamB=""
        lapsB="0"
        position="1"
        laps="54"
        score="897"
        overall="1"
        flag="fa w3-xlarge"
      />
    )
  }

  renderTeamsList() {
    return (
      <TeamsList teams={this.state.teams}/>
    )
  }

  handleClickOpenModalAdd() {
    const isOpenAdd = this.state.styleModalAdd.display
    if (isOpenAdd === 'none') {
      this.setState({
        styleModalAdd: {
          zIndex: 4,
          display: 'block',
        },
        styleModalEdit: {
          zIndex: 4,
          display: 'none'
        }
      })
    } else {
      this.setState({
        styleModalAdd: {
          zIndex: 4,
          display: 'none'
        },
        styleModalEdit: {
          zIndex: 4,
          display: 'none'
        }
      })
    }
  }

  handleClickOpenModalEdit() {
    const isOpenEdit = this.state.styleModalEdit.display
    if (isOpenEdit === 'none') {
      this.setState({
        styleModalAdd: {
          zIndex: 4,
          display: 'none'
        },
        styleModalEdit: {
          zIndex: 4,
          display: 'block'
        }
      })
    } else {
      this.setState({
        styleModalAdd: {
          zIndex: 4,
          display: 'none'
        },
        styleModalEdit: {
          zIndex: 4,
          display: 'none'
        }
      })
    }
  }

  handleClickOpen() {
    const display = this.state.styleNav.display
    if (display === 'none') {
      this.setState({
        styleNav: {
          zIndex: 3,
          width: '300px',
          display: 'block'
        },
        styleBG: {
          mouse: 'pointer',
          display: 'block'
        },
        styleModalAdd: {
          zIndex: 4,
          display: 'none'
        },
        styleModalEdit: {
          zIndex: 4,
          display: 'none'
        }
      })
    } else {
      this.setState({
        styleNav: {
          zIndex: 3,
          width: '300px',
          display: 'none'
        },
        styleBG: {
          mouse: 'pointer',
          display: 'none'
        },
        styleModalAdd: {
          zIndex: 4,
          display: 'none'
        },
        styleModalEdit: {
          zIndex: 4,
          display: 'none'
        }
      })
    }
  }

  handleClickClose() {
    this.setState({
      styleNav: {
        zIndex: 3,
        width: '300px',
        display: 'none'
      },
      styleBG: {
        mouse: 'pointer',
        display: 'none'
      },
      styleModalAdd: {
        zIndex: 4,
        display: 'none'
      },
      styleModalEdit: {
        zIndex: 4,
        display: 'none'
      }
    })
  }

  onSubmit(model) {
    axios.post(apiURL, {
      id: this.state.teams.length,
      teamname: model.teamname,
      carnumber: model.carnumber,
      costevent: model.costevent,
      designevent: model.designevent,
      salespresentation: model.salespresentation,
      acceleration: model.acceleration,
      maneuverability: model.maneuverability,
      hillclimb: model.hillclimb,
      suspension: model.suspension,
      endurance: model.endurance,
      penalties: model.penalties
      /* firstName: 'Fred',
      lastName: 'Flintstone' */
    })
    .then(function (response) {
      alert("Team Saved!")
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }

  componentDidMount(){
    axios.get(apiURL)
      .then(response => this.setState({ ...this.state, teams: response.data }))
  }

  render() {
    return (
      <React.Fragment>

        {this.renderLogoBar()}
        {this.renderNav()}
        {this.renderOverlayBG()}
        {this.renderModalAdd()}
        {this.renderModalEdit()}

        <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>

          <header className="w3-container" style={{ paddingTop: '22px' }}>
            <h5><b><i className="fa fa-dashboard"></i> My Dashboard</b></h5>
          </header>

          <div className="w3-row-padding w3-margin-bottom">
            <div className="w3-quarter">
              {this.renderWatchList1()}
            </div>
            <div className="w3-quarter">
              {this.renderWatchList2()}
            </div>
            <div className="w3-quarter">
              {this.renderWatchList3()}
            </div>
            <div className="w3-quarter">
              {this.renderWatchList4()}
            </div>
          </div>

          {this.renderTeamsList()}


          <footer className="w3-container w3-padding-16 w3-dark-grey" style={{ marginTop: '22px', bottom: '0', width: '100%' }}>
            <h4>FOOTER</h4>
            <pre style={{ width: "300px" }}>
              {JSON.stringify(this.state.data)}
            </pre>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
          </footer>

          {/* <div className='button__container'>
          <button className='button' onClick={this.handleClick}>
            Click Me
        </button>
          <p>{this.state.teams.map(team => renderTeam(team))}</p>
        </div> */}

        </div>

      </React.Fragment>
    )
  }
}
export default App