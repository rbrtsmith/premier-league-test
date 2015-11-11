import React from 'react';
import sortBy from 'sort-by';
import Team from './team';


export default React.createClass({
    render() {
        const teams = this.props.teams
            .sort(sortBy('-points'))
            .map((team, i) => {
                return (
                    <Team key={i} data={team} count={i+1}/>
                );
            });
        return (
            <tbody>
                {teams}
            </tbody>
        );
    }
});