import React from "react";
import Header from "./components/Header";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

// https://jsonbox.io/box_35af3e24183cfc0aa720

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      oldSongs: [],
      loading: false,
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSongList = this.deleteSongList.bind(this);
    this.sortByAlbum = this.sortByAlbum.bind(this);
    this.sortAlphabetically = this.sortAlphabetically.bind(this);
    this.filterByTheme = this.filterByTheme.bind(this);
    this.filterByRating = this.filterByRating.bind(this);
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonbox.io/box_35af3e24183cfc0aa720")
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            loading: false,
            songs: data,
            oldSongs: data,
            oldRatings: data,
          });
        },
        (error) => {
          this.setState({
            loading: true,
            error,
          });
        }
      );
  }

  addSong = (title, writer, album, rating) => {
    const songToAdd = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      writer: writer,
      album: album,
      rating: rating,
    };
    fetch("https://jsonbox.io/box_35af3e24183cfc0aa720", {
      method: "POST",
      body: JSON.stringify(songToAdd),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      console.log(`The response : ${response}`);
      console.log(response);
      return response.json();
    });
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.songs = [...newState.songs, songToAdd];
      return newState;
    });
  };

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
  //   if (theme !== "reset") {
  //     const songList = this.state.songs;
  //     let copyList = [...songList];
  //     copyList = copyList.filter((song) => song.theme === theme);
  //     console.log(copyList);
  //     console.log(songList);
  //     this.setState((prevState) => {
  //       prevState.genreSongs = copyList;
  //     });
  //   } else if (theme === "reset") {
  //     this.setState({
  //       songs: this.state.songs,
  //     });
  //   }
  //   console.log(theme);
  // }

  filterByTheme(event) {
    const theme = event.target.value;
    if (theme !== "reset") {
      this.setState((prevState) => {
        return {
          songs: prevState.oldSongs.filter((song) => {
            return song.theme === theme;
          }),
        };
      });
    } else if (theme === "reset") {
      this.setState((prevState) => {
        return {
          songs: prevState.oldSongs,
        };
      });
    }
    console.log(theme);
  }

  filterByRating(event) {
    const rating = event.target.value;

    if (rating !== "reset") {
      this.setState((prevState) => {
        return {
          songs: prevState.oldRatings.filter((song) => {
            return song.rating == rating;
          }),
        };
      });
    } else if (rating === "reset") {
      this.setState((prevState) => {
        return {
          songs: prevState.oldRatings,
        };
      });
    }
    console.log(rating);
  }

  render() {
    return (
      <div>
        <Header />
        <SongForm addSong={this.addSong} />
        <SongList
          loading={this.state.loading}
          // items={this.state.genreSongs ? this.state.genreSongs : this.state.songs
          // }
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
