import React, { useState } from 'react';

function HookCounter() {
   const [Count , setCount] =  useState(10);
   return(
       <div>
        <button onClick={() =>setCount(Count + 1)}>Count: {Count}</button>
       </div>
   )
}

export default HookCounter;
