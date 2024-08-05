import react from 'react';

const Content = (props) => {
    return (
        <div style={props.styleMode}>
            <p> Here's some text</p>
             <p> And here's a little more text</p>
        </div>
    );
};

export default Content;