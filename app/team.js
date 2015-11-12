import React from 'react';
import LastFive from './lastFive';


export default React.createClass({
    render() {
        const team = this.props.data;
        return (
            <tr>
                <td>{this.props.count}</td>
                <td>{team.name}</td>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.drawn}</td>
                <td>{team.lost}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.goalsFor - team.goalsAgainst}</td>
                <td>{team.points}</td>
                <td>
                    <LastFive results={team.last5}/>
                </td>
            </tr>
        );
    }
});