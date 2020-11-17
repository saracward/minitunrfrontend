import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";

const Songs = (props) => {
  // const [songs, setSongs] = useState([]);
  // const { event } = props;

  // const baseurl = "http://localhost:3000/songs";
  // useEffect(() => {
  //   const makeSongsCall = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/songs");
  //       const json = await res.json();
  //       console.log(json);
  //       setSongs(json);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   makeSongsCall();
  // }, []);

  const showSongs = () => {
    let songs = props.songs;
    if (songs.length > 0) {
      return songs.map((song) => {
        return (
          <div>
            <h4>
              {song.title} : {song.artist}
            </h4>
            <button
              onClick={() => {
                props.newFaves(song);
              }}
              className="addToFaves"
            >
              Add To Faves
            </button>

            <button
              onClick={() => {
                props.deleteSong(song);
              }}
              className="deleteSong"
            >
              Delete
            </button>
          </div>
        );
      });
    } else {
      return "No songs available.";
    }
  };

  return (
    <div className="songs">
      <h2 className="play">PLAYLIST 1</h2>
      {showSongs()}{" "}
    </div>
  );
};

export default Songs;
