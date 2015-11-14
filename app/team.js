import React from 'react';
import LastFive from './lastFive';


export default React.createClass({
    propTypes: {
        teamClickHandler: React.PropTypes.func.isRequired,
        data: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            played: React.PropTypes.number.isRequired,
            won: React.PropTypes.number.isRequired,
            drawn: React.PropTypes.number.isRequired,
            lost: React.PropTypes.number.isRequired,
            goalsFor: React.PropTypes.number.isRequired,
            goalsAgainst: React.PropTypes.number.isRequired,
            goalDifference: React.PropTypes.number.isRequired,
            points: React.PropTypes.number.isRequired,
            last5: React.PropTypes.array.isRequired,
        })
    },

    handleClick(team) {
        this.props.teamClickHandler(team);
    },

    render() {
        const team = this.props.data;
        let showTeamStatsClassName = 'league-table__cell__description';
        if (this.props.showTeamStats === team.name) {
            showTeamStatsClassName += ' league-table__cell__description--open';
        }
        const stats = Object.keys(team).map((stat, i) => {
            if (stat === 'description') {
                return;
            }
            if (stat === 'last5') {
                return (
                    <td key={i} className="league-table__cell"><LastFive results={team[stat]}/></td>
                );
            } else if (stat === 'name') {
                return (
                    <td key={i}
                        style={{cursor: 'pointer'}} 
                        className="league-table__cell" 
                    >
                        <div className="league-table__team-name"
                            onClick={this.handleClick.bind(null, team[stat])}>
                            {team[stat]}
                        </div>
                        <div className={showTeamStatsClassName}>
                            {team['description']}
                        </div>
                    </td>
                );
            }
            return(
                <td key={i} className="league-table__cell">{team[stat]}</td>
            );
        });
        return (
            <tr className="league-table__row">
                {stats}
            </tr>
        );
    }
});