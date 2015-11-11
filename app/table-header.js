import React from 'react';

export default React.createClass({
    render() {
        return (
            <thead>
                <tr>
                    <td>
                        {this.props.competition}
                    </td>
                </tr>
                <tr>
                    <td>Position</td>
                    <td>Team</td>
                    <td>P</td>
                    <td>W</td>
                    <td>D</td>
                    <td>L</td>
                </tr>
            </thead>
        );
    }
});