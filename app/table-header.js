import React from 'react';
import store from './store';



export default React.createClass({

    setOrder(value) {
        store.orderBy = value;
    },

    render() {
        return (
            <thead>
                <tr>
                    <td>Position</td>
                    <td onClick={this.setOrder.bind(null, 'name')}>Team</td>
                    <td onClick={this.setOrder.bind(null, 'played')}>P</td>
                    <td onClick={this.setOrder.bind(null, '-won')}>W</td>
                    <td onClick={this.setOrder.bind(null, '-drawn')}>D</td>
                    <td onClick={this.setOrder.bind(null, '-lost')}>L</td>
                    <td onClick={this.setOrder.bind(null, '-goalsFor')}>F</td>
                    <td onClick={this.setOrder.bind(null, 'goalsAgainst')}>A</td>
                    <td onClick={this.setOrder.bind(null, '-goalDifference')}>GD</td>
                    <td onClick={this.setOrder.bind(null, '-points')}>Pts</td>
                    <td>Last5</td>
                </tr>
            </thead>
        );
    }
});