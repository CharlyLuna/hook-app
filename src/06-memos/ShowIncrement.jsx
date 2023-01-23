import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("I render myself");
  return (
    <button className='btn btn-dark' onClick={() => increment(5)}>
      +1
    </button>
  );
});
