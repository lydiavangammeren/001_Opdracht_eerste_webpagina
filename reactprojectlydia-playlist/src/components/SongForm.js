import React from "react";

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liedje: "", schrijver: "", album: 0, cijfer: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ ...this.state, [event.target.name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addSong(
      this.state.liedje,
      this.state.schrijver,
      this.state.album,
      this.state.cijfer
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="liedje"
            placeholder="Liedje"
            value={this.state.liedje}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="schrijver"
            placeholder="Tekstschrijver"
            value={this.state.writer}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="album"> Albumnummer (1-41): </label>

        <input
          type="number"
          name="album"
          value={this.state.album}
          onChange={this.handleChange}
          min="1"
          max="41"
        ></input>
        <label htmlFor="cijfer"></label>

        <select
          name="cijfer"
          value={this.state.cijfer}
          onChange={this.handleChange}
        >
          <option value="">--Geef je liedje een cijfer--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input className="submit" type="submit" value="Voeg toe" />
      </form>
    );
  }
}

export default SongForm;
