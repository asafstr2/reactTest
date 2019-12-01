import React from 'react';

var UserInput= (props)=>
<div>
      <form onSubmit={props.onSubmit}>
        <label>
          Name:
          <input type="text" value={props.startName} onChange={props.onChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
</div>


export default UserInput;