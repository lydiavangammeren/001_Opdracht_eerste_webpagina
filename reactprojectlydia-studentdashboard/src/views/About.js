// Per student aparte routing
// Als gebruiker wil ik een lijst zien van de namen van alle studenten
// en op een van deze studenten kunnen klikken.
//  Wanneer ik op een student-naam klik word ik naar de route /{naam-van-student} gebracht.
//  De staafdiagram past zich aan met de data van alleen deze student.
// Tip: de chart blijft hetzelfde op de X en Y as, krijgt alleen "minder" data,
// namelijk de data van 1 student.

import React from "react";

class About extends React.Component {
  render() {
  return (
    <div>
      <h1>About me - more information will follow </h1>
    </div>
  );
}}

export default About;
