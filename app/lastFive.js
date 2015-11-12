import React from 'react';

export default React.createClass({
    render() {
        const results = this.props.results.map((result, i) => {
            const classname = `last5__item last5__item--${result}`
            return (
                <li key={i} className={classname}>
                    {result}
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