import React from 'react';

export default React.createClass({
    propTypes: {
        reSort: React.PropTypes.func.isRequired
    },

    handleClick(value) {
        this.props.reSort(value);
    },

    styles: {
        sortItem: {
            cursor: 'pointer'
        }
    },

    render() {
        return (
            <thead className="league-table__header">
                <tr>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['position'])}>
                        #
                        <div className="league-table__tooltip">
                            Sort by team position
                        </div>
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['name'])}>
                        Team
                        <div className="league-table__tooltip">
                            Sort by team name
                        </div>
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['played'])}>
                        P
                        <div className="league-table__tooltip">
                            Sort by games played
                        </div>
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['-won'])}>
                        <div className="league-table__tooltip">
                            Sort by games won
                        </div>
                        W
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['-drawn'])}>
                        <div className="league-table__tooltip">
                            Sort by games drawn
                        </div>
                        D
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['-lost'])}>
                        <div className="league-table__tooltip">
                            Sort by games lost
                        </div>
                        L
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['-goalsFor'])}>
                        <div className="league-table__tooltip">
                            Sort by goals for
                        </div>
                        F
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['-goalsAgainst'])}>
                        <div className="league-table__tooltip">
                            Sort by goals against
                        </div>
                        A
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['-goalDifference'])}>
                        <div className="league-table__tooltip">
                            Sort by goal difference
                        </div>
                        GD
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['-points'])}>
                        <div className="league-table__tooltip">
                            Sort by points
                        </div>
                        Pts
                    </td>
                    <td style={this.styles.sortItem} className="league-table__cell" onClick={this.handleClick.bind(null, ['last5'])}>
                        <div className="league-table__tooltip">
                            Sort by last 5
                        </div>
                        Last5
                    </td>
                </tr>
            </thead>
        );
    }
});