import React from 'react';
import TableHeader from './table-header';
import Teams from './teams';


export default React.createClass({
    render() {
        return (
            <table>
                <TableHeader competition={this.props.data.competition}/>
                <Teams sortBy="goalsAgainst" teams={this.props.data.teams}/>
            </table>
        );
    }
});