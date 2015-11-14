import React from 'react';
import sortBy from 'sort-by';
import Team from './team';


export default React.createClass({
    propTypes: {
        teamClickHandler: React.PropTypes.func.isRequired
    },

    sortFunc() {
        let property = this.props.sortBy.join(',');
        if (property === 'last5') {
            return (a,b) => {
                const aTotal = a.last5.reduce((total, curr) => total + curr),
                    bTotal = b.last5.reduce((total, curr) => total + curr);
                return bTotal - aTotal;
            };
        }
        return sortBy(property);
    },

    teamClickHandler(team) {
        this.props.teamClickHandler(team);
    },

    render() {
        const teams = this.props.teams
            .sort(this.sortFunc())
            .map((team, i) => {
                return (
                    <Team 
                        showTeamStats={this.props.showTeamStats}
                        key={i} 
                        teamClickHandler={this.teamClickHandler} 
                        data={team}/>
                );
            });
        return (
            <tbody>
                {teams}
            </tbody>
        );
    }
});