import React from 'react';
import TableHeader from './table-header';
import Teams from './teams';
import store from './store';



export default React.createClass({
    getInitialState () {
        return {
            sortBy: store.orderBy
        };
    },

    handleClick() {
        this.setState({
            sortBy: store.orderBy
        });
    },

    render() {
        return (
            <div>
                <h1>{this.props.data.competition}</h1>
                <table className="league-table" onClick={this.handleClick}>
                    <TableHeader/>
                    <Teams sortBy={this.state.sortBy} teams={this.props.data.teams}/>
                </table>
            </div>
        );
    }
});