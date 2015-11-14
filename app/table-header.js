import React from 'react';

export default React.createClass({
    propTypes: {
        reSort: React.PropTypes.func.isRequired
    },

    handleClick(value) {
        this.props.reSort(value);
    },

    render() {
        return (
            <thead>
                <tr>
                    <td>Position</td>
                    <td onClick={this.handleClick.bind(null, 'name')}>Team</td>
                    <td onClick={this.handleClick.bind(null, 'played')}>P</td>
                    <td onClick={this.handleClick.bind(null, '-won')}>W</td>
                    <td onClick={this.handleClick.bind(null, '-drawn')}>D</td>
                    <td onClick={this.handleClick.bind(null, 'lost')}>L</td>
                    <td onClick={this.handleClick.bind(null, '-goalsFor')}>F</td>
                    <td onClick={this.handleClick.bind(null, 'goalsAgainst')}>A</td>
                    <td onClick={this.handleClick.bind(null, '-goalDifference')}>GD</td>
                    <td onClick={this.handleClick.bind(null, '-points')}>Pts</td>
                    <td>Last5</td>
                </tr>
            </thead>
        );
    }
});