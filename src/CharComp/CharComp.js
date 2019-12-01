import React from 'react';

import './CharComp.css';

const charComp = ( props ) => {
    return (
        <div className="charComp" onClick={props.click}>
          <p>{props.showLetter} </p>
        </div>
    )
};

export default charComp;