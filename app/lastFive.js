import React from 'react';

export default React.createClass({
    render() {
        const results = this.props.results.map((result, i) => {
            const classname = `last5__item last5__item--${result}`
            let tooltip;
            if (result === 3) {
                tooltip = 'win';
            } else if (result) {
                tooltip = 'draw';
            } else {
                tooltip = 'loss';
            }
            return (
                <li key={i} className={classname}>
                    {result}
                    <div className="league-table__tooltip">
                        {tooltip}
                    </div>
                </li>
            );
        });
        return (
            <ul className='last5'>
                {results}
            </ul>
        );
    }
});