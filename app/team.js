import React from 'react';

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
            </tr>
        );
    }
});