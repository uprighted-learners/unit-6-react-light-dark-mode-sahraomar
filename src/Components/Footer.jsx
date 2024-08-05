import React from 'react';

const Footer = (props) => {
    return (
    <div style={props.styleMode}>
     <p>Author's Name</p>
     <p>{new Date().toLocaleDateString()}</p>

    </div>
    );
};

export default Footer;