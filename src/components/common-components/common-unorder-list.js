import React from 'react';

function UnorderedList({ listItem }) {
    return (
        <ul className="common-unorder-list">
            {listItem.map((value, i) => (
                <li key={i} className="common-unorder-list-item">{value}</li>
            ))}
        </ul>
    );
}

export default UnorderedList;