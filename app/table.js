import React from 'react';
import TableHeader from './table-header';
import Teams from './teams';


export default React.createClass({
    getInitialState () {
        return {
            sortBy: 'name'
        };
    },
    render() {
        return (
            <table>
                <TableHeader competition={this.props.data.competition}/>
                <Teams sortBy={this.state.sortBy} teams={this.props.data.teams}/>
            </table>
        );
    }
});