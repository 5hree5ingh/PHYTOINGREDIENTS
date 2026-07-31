import React from 'react';

function UnOrderList({ listOptions }) {
    return (
        <ul className="web-heading-list">
            {listOptions.map((value, i) => (
                <li key={i}>{value}</li>
            ))}
        </ul>
    );
}

export default UnOrderList;