import React from 'react';

const foo = function(word, neg) {

};

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
                    <td onClick={foo.bind(null, 'position')}>Position</td>
                    <td>Team</td>
                    <td>P</td>
                    <td>W</td>
                    <td>D</td>
                    <td>L</td>
                    <td>F</td>
                    <td>A</td>
                    <td>GD</td>
                    <td>Pts</td>
                    <td>Last5</td>
                </tr>
            </thead>
        );
    }
});