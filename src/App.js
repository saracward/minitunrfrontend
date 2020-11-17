import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Songs from "./components/Songs";
import MyFaves from "./components/MyFaves";
import Form from "./components/Form";

function App() {
  const [songs, setSongs] = React.useState([]);
  const baseurl = "http://localhost:3000/songs/";
  const [faves, setFaves] = useState([]);
  const addFave = (favorite) => {
    setFaves([...faves, favorite]);
  };

  const getSongs = async () => {
    try {
      const res = await fetch(baseurl);
      const json = await res.json();
      console.log(json);
      setSongs(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // const g = async () => {
    //   try {
    //     const res = await fetch("http://localhost:3000/songs");
    //     const json = await res.json();
    //     console.log(json);
    //     setSongs(json);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    getSongs();
  }, []);

  // const getSongs = () => {
  //   fetch(baseurl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSongs(data);
  //     });
  // };

  const handleCreate = (newSong) => {
    console.log(newSong);
    fetch(baseurl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    }).then((response) => getSongs());
  };

  // const handleCreate = (newSong) => {
  //   fetch(baseurl, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newSong),
  //   }).then((response) => getSongs());
  // };

  const [selectedSong, setSelectedSong] = React.useState();

  const handleUpdate = (song) => {
    fetch(baseurl + song.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    }).then((response) => getSongs());
  };

  const selectSong = (song) => {
    setSelectedSong(song);
  };

  const emptySong = {
    title: "",
    artist: "",
    time: 0,
  };

  const deleteSong = (song) => {
    fetch(baseurl + song.id, {
      method: "delete",
    }).then((response) => getSongs());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="tunr">TUNR.</h1>
        <p className="smolwords">For all your playlist needs</p>
      </header>
      <main>
        <Route>
          <Songs
            songs={songs}
            newFaves={addFave}
            deleteSong={deleteSong}
            selectSong={selectSong}
          />
        </Route>
        <h2 className="faves">FAVES</h2>
        <p>Title Artist Time</p>
        <Route>
          <MyFaves faves={faves} />
        </Route>
        <h2 className="play">ADD NEW SONG</h2>
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => (
              <Form
                {...rp}
                song={emptySong}
                label="create"
                handleSubmit={handleCreate}
              />
            )}
          ></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
