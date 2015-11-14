import React from 'react';
import LastFive from './lastFive';


export default React.createClass({
    propTypes: {
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
            last5: React.PropTypes.array.isRequired
        })
    },

    render() {
        const team = this.props.data;
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{team.name}</td>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.drawn}</td>
                <td>{team.lost}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.goalDifference}</td>
                <td>{team.points}</td>
                <td>
                    <LastFive results={team.last5}/>
                </td>
            </tr>
        );
    }
});