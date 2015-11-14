import React from 'react';
import TableHeader from './table-header';
import Teams from './teams';


export default React.createClass({
    getInitialState () {
        return {
            sortBy: '-points'
        };
    },

    reSort(value) {
        this.setState({
            sortBy: value
        });
    },

    render() {
        return (
            <div>
                <h1>{this.props.data.competition}</h1>
                <table className="league-table">
                    <TableHeader reSort={this.reSort}/>
                    <Teams sortBy={this.state.sortBy} teams={this.props.data.teams}/>
                </table>
            </div>
        );
    }
});