  import React from 'react';

var UserOutput= (props)=>
<div>
	<p>My Name is {props.name}</p>
 <p>{props.children}</p>
</div>


export default UserOutput;