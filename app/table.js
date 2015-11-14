import React from 'react';
import TableHeader from './table-header';
import Teams from './teams';


export default React.createClass({
    getInitialState () {
        return {
            sortBy: ['position'],
            showTeamStats: null
        };
    },

    reSort(value) {
        this.setState({
            sortBy: value
        });
    },

    teamClickHandler(team) {
        let teamToShow = team;
        if (this.state.showTeamStats === team) {
            teamToShow = null;
        }
        this.setState({
            showTeamStats: teamToShow
        });
    },

    render() {
        return (
            <div>
                <h1>{this.props.data.competition}</h1>
                <table className="league-table">
                    <TableHeader reSort={this.reSort}/>
                    <Teams 
                        showTeamStats={this.state.showTeamStats}
                        teamClickHandler={this.teamClickHandler} 
                        sortBy={this.state.sortBy} teams={this.props.data.teams}
                    />
                </table>
            </div>
        );
    }
});