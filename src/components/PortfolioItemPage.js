import React from 'react';

const PortfolioItemPage = (props) => {
    console.log(props);
    return (
    <div>
        <h1>A Thing I've Done</h1>
        <p>This page is for the item with an id of {props.match.params.id}</p>
    </div>
    );
};

export default PortfolioItemPage;
