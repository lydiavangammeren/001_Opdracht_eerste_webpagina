import React from "react";
import Header from "./components/Header";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "Mijn Boom",
          writer: "Letty Kosterman, Jules de Corte",
          album: 9,
          rating: 4,
        },
        {
          id: 2,
          title: "Twee vaders",
          writer: "Peter Zwerus",
          album: 26,
          rating: 5,
        },
        {
          id: 3,
          title: "Op een onbewoond eiland",
          writer: "Herman Pieter de Boer",
          album: 2,
          rating: 1,
        },
        {
          id: 4,
          title: "Wakker met een wijsje",
          writer: "Jaap Bakker",
          album: 12,
          rating: 5,
        },
        {
          id: 5,
          title: "Ik ben zo'n kind",
          writer: "Flip Peters",
          album: 8,
          rating: 2,
        },
        {
          id: 6,
          title: "Joris en Jan",
          writer: "Robert Long",
          album: 9,
          rating: 4,
          theme: "vriendschap",
        },
        {
          id: 7,
          title: "Wij zijn kwaad",
          writer: "Jules de Corte",
          album: 10,
          rating: 2,
          theme: "vriendschap",
        },
        {
          id: 8,
          title: "Een tweedehands jas",
          writer: "Ivo de Wijs",
          album: 2,
          rating: 5,
          theme: "dieren",
        },
        {
          id: 9,
          title: "Beestenboel",
          writer: "onbekend",
          album: 4,
          rating: 5,
          theme: "dieren",
        },
        {
          id: 10,
          title: "Frisse knul",
          writer: "Marjan Berk",
          album: 6,
          rating: 4,
          theme: "verliefdheid",
        },
        {
          id: 11,
          title: "Gewoon te gewoon",
          writer: "Frans Bakker",
          album: 13,
          rating: 4,
          theme: "verliefdheid",
        },
        {
          id: 12,
          title: "Zusje van mijn zus",
          writer: "Bert Vervoorn",
          album: 15,
          rating: 3,
          theme: "verliefdheid",
        },
        {
          id: 13,
          title: "Geld is overbodig",
          writer: "onbekend",
          album: 6,
          rating: 4,
          theme: "geld",
        },
        {
          id: 14,
          title: "Ik ben toch zeker Sinterklaas niet",
          writer: "onbekend",
          album: 7,
          rating: 5,
          theme: "geld",
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSongList = this.deleteSongList.bind(this);
    this.sortByAlbum = this.sortByAlbum.bind(this);
    this.sortAlphabetically = this.sortAlphabetically.bind(this);
    this.filterByTheme = this.filterByTheme.bind(this);
    this.filterByRating = this.filterByRating.bind(this);
  }

  addSong(title, writer, album, rating) {
    this.setState((prevState) => {
      const songToAdd = {
        id: prevState.songs.length + 1,
        title: title,
        writer: writer,
        album: album,
        rating: rating,
      };

      const songsWithAddedSong = [...prevState.songs, songToAdd];
      return { songs: songsWithAddedSong };
    });
  }

  handleClickSong(event) {
    const songTitle = event.target.getAttribute("value");
    console.log(songTitle);
    // Deze functie later ombouwen zodat bij het clicken op het liedje hij je stuurt
    // naar de toepasselijke youtube url. Die dus meegeven in de state
  }

  deleteSongList() {
    this.setState({ songs: [] });
  }

  sortByAlbum() {
    this.setState((prevState) => {
      return prevState.songs.sort((a, b) => (a.album > b.album ? 1 : -1));
    });
  }

  sortAlphabetically() {
    this.setState((prevState) => {
      return prevState.songs.sort((a, b) => (a.title > b.title ? 1 : -1));
    });
  }

  // filterByTheme(event) {
  //   const theme = event.target.value;
  //   this.setState((prevState) => {
  //     return {
  //       songs: prevState.songs.filter((song) => {
  //         return song.theme === theme;
  //       }),
  //     };
  //   });
  //   console.log(theme);
  // }

  filterByTheme(event) {
    const theme = event.target.value;
    console.log(theme)
    const songs = this.state.songs
    const themeSongs = (
      songs.filter((song) => {
        return song.theme === theme;
      }))
    return themeSongs;  
  }

  filterByRating(event) {
    const rating = event.target.value;
    this.setState((prevState) => {
      return {
        songs: prevState.songs.filter((song) => {
          return song.rating == rating;
        }),
      };
    });
    console.log(rating);
  }

  render() {
    return (
      <div>
        <Header />
        <SongForm addSong={this.addSong} />
        <SongList
          items={this.state.songs}
          handleClickDelete={this.deleteSongList}
          handleClickItem={this.handleClickSong}
          handleClickSort={this.sortByAlbum}
          handleClickSortAlphabetically={this.sortAlphabetically}
          handleSelect={this.filterByTheme}
          handleRatingSelection={this.filterByRating}
        />
      </div>
    );
  }
}

export default SongOverview;
