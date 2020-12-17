import React from "react";


function Studentpage(props) {
    // console.log(props)
    const name = props.match.params.name
  return (
    <h1>{`Naam van student ${name}`}</h1>
  );
}

export default Studentpage;
