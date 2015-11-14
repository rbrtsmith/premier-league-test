import React from 'react';
import ReactDOM from 'react-dom';
import data from './premier-league-data';
import Table from './table';


const App = React.createClass({
    render() {
        return (
            <div>
                <Table 
                    className="leage-table" data={data}/>
            </div>
        );
    }
});


ReactDOM.render( <App />, document.querySelector('#app'));
