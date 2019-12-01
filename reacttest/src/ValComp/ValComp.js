import React from 'react';


const valComp = ( props ) => {
    let between=[4,12]
  return (
      
        <div className="Person">
            <p>{props.showLength>0&&props.showLength<between[0]? "too short":props.showLength>between[1]?"too long":props.showLength}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default valComp;