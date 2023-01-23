import React from "react";
// import { memo } from "react";

export const Small = React.memo(({ value }) => {
  console.log("I get rendered again");
  return <small>{value}</small>;
});
