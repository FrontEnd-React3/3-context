import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "jeruzalema", id: 1 },
    { title: "reet peteet", id: 2 },
    { title: "jingle bells", id: 3 }
  ]);

  const [age, setAge] = useState(20); // 2/another variable is added age;

  const addSong = title => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };
  // 1/useEffect (remeber onChange and it's problem, preventDeafault)
  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}> {song.title}</li>;
        })}
      </ul>

      {/* <button onClick={addSong}>Add a song</button> */}
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
      {/* // 3/It's rerendering no matter the songs are not changing but age is, 
      imagine we want it to render only when the songs are updated,
      4/ , [songs] is added on line 19 */}
    </div>
  );
};

export default SongList;
