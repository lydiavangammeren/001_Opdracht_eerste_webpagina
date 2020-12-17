// Dashboard Overview User-story: Als gebruiker wil ik als ik de homepage van de applicatie
// open een overzicht zien in de vorm van een staafdiagram van de evaluaties (leuk & moeilijk)
// van alle studenten.
// Als gebruiker moet ik in 1 oogopslag onderscheid kunnen maken tussen de opdrachten en de leuk/moeilijk evaluatie.
// Zorg ervoor dat er visueel een duidelijk onderscheid wordt gemaakt,
// door bijvoorbeeld met duidelijke kleuren te werken.
// Zie het voorbeeld met rood en geel hieronder. ✔ 

// Optie 1: Als gebruiker wil ik dmv een checkbox kunnen aangeven of ik
//  in de staafdiagram alléén wil laten zien hoe leuk de opdracht was,
//  alléén wil zien hoe moeilijk de opdracht was, of beide. ✔ 

// Per student aparte routing:
// Als gebruiker wil ik een lijst zien van de namen van alle studenten
// en op een van deze studenten kunnen klikken.
//  Wanneer ik op een student-naam klik word ik naar de route /{naam-van-student} gebracht.
import React from "react";
import Chart from "./Chart";
import studentdata from "../utils/studentdata";
import StudentList from "./StudentList";
import "../../node_modules/react-vis/dist/style.css";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: studentdata,
    };
  }

  render() {
    return (
      <div>
        <h2>Average funfactor and difficulty per assignment</h2>
        <Chart items={this.state.students}></Chart>
        <StudentList items={this.state.students}></StudentList>
      </div>
    );
  }
}

export default DashBoard;
